import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Format as a formal letter
  const mailBody = `
To,
The E-cell Team,
Sri Venkateswara College of Engineering

Subject: ${subject}

Dear Sir/Madam,

${message}

Sincerely,
${name}
Email: ${email}
`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ecellsvceconfessions@gmail.com",
        pass: "osro mjht aoot cibs",
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <ecellsvceconfessions@gmail.com>`,
      to: "bala.ramyaram@gmail.com",
      subject: `Contact: ${subject}`,
      text: mailBody,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact email send error:", error);
    res.status(500).json({ message: "Failed to send message", error: error.message || error });
  }
}
