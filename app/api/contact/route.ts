import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  const { name, email, phone, address, testType, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Water-Wise Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New booking request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Address: ${address || "—"}`,
        `Test type: ${testType || "Not specified"}`,
        `Message: ${message || "—"}`,
      ].join("\n"),
      html: `
        <h2 style="color:#0077b6">New booking request</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
          <tr><td><strong>Address</strong></td><td>${address || "—"}</td></tr>
          <tr><td><strong>Test type</strong></td><td>${testType || "Not specified"}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message || "—"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
