// pages/api/sendConfession.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { confession } = req.body;

  if (!confession || confession.trim() === "") {
    return res.status(400).json({ message: "Message cannot be empty" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ecellsvceconfessions@gmail.com",
        pass: "osro mjht aoot cibs", // Gmail app password
      },
    });

    await transporter.sendMail({
      from: '"Confession Bot" <ecellsvceconfessions@gmail.com>',
      to: "ecellsvceconfessions@gmail.com",
      subject: "New Anonymous Confession",
      text: confession,
    });

    return res.status(200).json({ message: "Message sent" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ message: "Failed to send message" });
  }
}
