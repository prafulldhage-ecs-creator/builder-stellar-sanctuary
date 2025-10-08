import { RequestHandler } from "express";

export const handleContact: RequestHandler = async (req, res) => {
  const { name, email, message } = req.body ?? {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }
  // In a real app, forward to EmailJS/Sendgrid/etc. For now, acknowledge receipt.
  console.log("Contact message received:", { name, email, message });
  return res.status(200).json({ ok: true });
};
