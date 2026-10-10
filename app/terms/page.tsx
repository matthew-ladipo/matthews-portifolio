import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Matthew Ladipo",
  description: "Terms and conditions for using the Matthew Ladipo portfolio website and its contact services.",
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Terms & Conditions</h1>
        <p>By using this website, you agree to the following terms and conditions.</p>

        <h2>Website Use</h2>
        <p>
          This site is provided for informational and professional portfolio purposes. You may browse the content for
          personal or business evaluation and may contact us using the available form.
        </p>

        <h2>Content Ownership</h2>
        <p>
          All content, design, and branding on this website are the property of Matthew Ladipo unless otherwise
          stated. Reproduction without permission is prohibited.
        </p>

        <h2>Accuracy</h2>
        <p>
          While we strive to keep project and portfolio information accurate and up to date, details may change. We
          reserve the right to update content at any time without notice.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          This website is provided as-is. We do not guarantee uninterrupted access and shall not be liable for any
          loss arising from the use or inability to use the website.
        </p>

        <h2>Contact</h2>
        <p>For legal or policy questions, contact matthewladipo@gmail.com.</p>
      </article>
    </main>
  )
}
