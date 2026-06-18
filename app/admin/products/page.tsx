"use client";

import Navbar from "@/components/Navbar";
import AdminRoute from "@/components/AdminRoute";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FiPlus, FiPackage, FiImage, FiEdit3 } from "react-icons/fi";
import { uploadToSupabase } from "@/lib/uploadToSupabase";

export default function AdminProductsPage() {
  const [name, setName] = useState("");
const [brand, setBrand] = useState("");
const [category, setCategory] = useState("");
const [price, setPrice] = useState("");
const [oldPrice, setOldPrice] = useState("");
const [stock, setStock] = useState("");
const [description, setDescription] = useState("");
const [loading, setLoading] = useState(false);
const [imageUrl, setImageUrl] = useState("");
const [uploading, setUploading] = useState(false);
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <AdminRoute>
        <Navbar active="admin" />

        <section className="px-5 py-10 lg:px-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="rounded-[32px] bg-[#111] p-10 text-white">
              <p className="font-black text-[#ffb300]">ADMIN PANEL</p>
              <h1 className="mt-3 text-5xl font-black">
                Product <span className="text-[#ffb300]">Management</span>
              </h1>
              <p className="mt-3 text-gray-300">
                Add, edit and manage DOMIFLAME.MALL products.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
              <div className="rounded-[28px] bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-3">
                  <FiPlus className="text-3xl text-[#ffb300]" />
                  <h2 className="text-3xl font-black">Add New Product</h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <input
  placeholder="Product Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
/>

                  <input
  placeholder="Brand Name"
  value={brand}
  onChange={(e) => setBrand(e.target.value)}
  className="rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
/>

                  <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
>
  <option value="">Select Category</option>
  <option>Fashion</option>
  <option>Electronics</option>
  <option>Beauty</option>
  <option>Home</option>
  <option>Accessories</option>
  <option>Lifestyle</option>
  <option>Gifts</option>
  <option>Deals</option>
</select>

                  <input
  placeholder="Price"
  type="number"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
  className="rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
/>
                  <input
                    placeholder="Old Price"
                    type="number"
                    value={oldPrice}
                    onChange={(e) => setOldPrice(e.target.value)}
                    className="rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
                  />

                  <input
  placeholder="Stock Quantity"
  type="number"
  value={stock}
  onChange={(e) => setStock(e.target.value)}
  className="rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
/>
                </div>

                <textarea
                  placeholder="Product Description"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-5 w-full rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
                />

                <div className="mt-5 rounded-2xl border border-dashed border-[#ddd] p-8 text-center">
  <FiImage className="mx-auto text-5xl text-[#ffb300]" />

  <p className="mt-3 font-black">Product Image Upload</p>

  <input
    type="file"
    accept="image/*"
    className="mt-5"
    onChange={async (e) => {
      try {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);

        const url = await uploadToSupabase(file);
        setImageUrl(url);

        alert("Image uploaded successfully!");
      } catch (error: any) {
        alert(error.message);
      } finally {
        setUploading(false);
      }
    }}
  />

  {uploading && (
    <p className="mt-3 font-bold text-[#ffb300]">Uploading image...</p>
  )}

  {imageUrl && (
    <p className="mt-3 text-sm font-bold text-green-600">
      Image uploaded successfully ✅
    </p>
  )}
</div>

                <button
  onClick={async () => {
    try {
      setLoading(true);

      if (!imageUrl) {
  alert("Please upload product image first");
  return;
}

      await addDoc(collection(db, "products"), {
        name,
        brand,
        category,
        price: Number(price),
        oldPrice: Number(oldPrice),
        stock: Number(stock),
        description,
        imageUrl,
        status: "active",
        createdAt: serverTimestamp(),
      });

      alert("Product saved successfully!");

      setName("");
      setBrand("");
      setCategory("");
      setPrice("");
      setOldPrice("");
      setStock("");
      setDescription("");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }}
  className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#ffb300] py-4 text-lg font-black transition hover:bg-[#111] hover:text-white"
>
  <FiPlus /> {loading ? "Saving..." : "Save Product"}
</button>
              </div>

              <div className="space-y-5">
                <div className="rounded-[28px] bg-white p-6 shadow-lg">
                  <FiPackage className="text-4xl text-[#ffb300]" />
                  <h3 className="mt-4 text-2xl font-black">Products</h3>
                  <p className="mt-2 text-[#666]">
                    Your products will appear here after saving.
                  </p>
                </div>

                <div className="rounded-[28px] bg-white p-6 shadow-lg">
                  <FiEdit3 className="text-4xl text-[#ffb300]" />
                  <h3 className="mt-4 text-2xl font-black">Next</h3>
                  <p className="mt-2 text-[#666]">
                    We will connect Firestore database and Supabase image upload.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AdminRoute>
    </main>
  );
}