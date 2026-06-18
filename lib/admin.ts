export const adminEmails = [
  "sasuke.work01@gmail.com",
  // future admin emails yaha add karna
];

export function isAdminEmail(email?: string | null) {
  return !!email && adminEmails.includes(email.toLowerCase());
}