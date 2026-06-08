import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBZQWwdRf5XI6-TH4CXfKvFtiOvk-142Q",
  authDomain: "domiflame-mall-fc10f.firebaseapp.com",
  projectId: "domiflame-mall-fc10f",
  appId: "1:546979185797:web:c32b568fc8cc80606295ec",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();