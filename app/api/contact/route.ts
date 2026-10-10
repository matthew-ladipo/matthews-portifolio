import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = sanitizeString(body?.name);
    const email = sanitizeString(body?.email);
    const subject = sanitizeString(body?.subject);
    const message = sanitizeString(body?.message);
    const website = sanitizeString(body?.website);
    const company = sanitizeString(body?.company);

    if (website || company) {
      return NextResponse.json({ message: "Spam detected." }, { status: 400 });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const emailReceiver = process.env.EMAIL_RECEIVER;
    const fromAddress = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!resendApiKey || !emailReceiver) {
      return NextResponse.json(
        {
          message:
            "Contact form is not configured yet. Add RESEND_API_KEY and EMAIL_RECEIVER to enable email sending.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: fromAddress,
      to: emailReceiver,
      replyTo: email,
      subject: subject || `New message from ${name}`,
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
