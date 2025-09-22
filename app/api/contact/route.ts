import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!process.env.EMAIL_RECEIVER) {
      throw new Error("EMAIL_RECEIVER environment variable not set");
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // replace with your domain later
      to: process.env.EMAIL_RECEIVER,
      subject: subject || `New message from ${name}`,
      headers: {
        "Reply-To": email, // ✅ correct way to allow direct replies
      },
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully ✅" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email ❌" },
      { status: 500 }
    );
  }
}
