import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, website, company } = await req.json();

    if (website || company) {
      return NextResponse.json(
        { message: "Spam detected." },
        { status: 400 }
      );
    }

    if (!resend || !process.env.EMAIL_RECEIVER) {
      return NextResponse.json(
        { message: "Contact form is not configured yet. Add RESEND_API_KEY and EMAIL_RECEIVER to enable email sending." },
        { status: 503 }
      );
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
