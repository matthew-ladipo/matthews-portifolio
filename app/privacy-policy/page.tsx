import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Matthew Ladipo",
  description: "How Matthew Ladipo collects, uses, and protects your personal information on this portfolio website.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>
          This website is operated by Matthew Ladipo. We respect your privacy and are committed to protecting
          your personal information.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect personal information you provide directly such as your name, email address, and message
          content when you contact us through the website form.
        </p>

        <h2>How We Use Information</h2>
        <p>
          We use this information only to respond to your message, follow up on inquiries, and improve the website
          experience. We do not sell your data.
        </p>

        <h2>Cookies</h2>
        <p>
          We may use cookies or local storage to remember your preferences, such as cookie consent choices and
          theme settings. These are used to improve usability and do not include tracking for advertising purposes.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party hosting, analytics, and email services to operate and improve the website. Those
          services may collect limited technical data as part of normal operation.
        </p>

        <h2>Your Rights</h2>
        <p>
          You can request access to or deletion of your personal information by contacting us at
          matthewladipo@gmail.com.
        </p>

        <h2>Contact</h2>
        <p>If you have any questions, please contact us at matthewladipo@gmail.com.</p>
      </article>
    </main>
  )
}
