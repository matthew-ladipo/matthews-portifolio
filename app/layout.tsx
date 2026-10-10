import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieBanner } from "@/components/cookie-banner"
import { Analytics } from "@/components/analytics"

// Define fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://matthewladipo.dev"),
  title: {
    default: "Matthew Ladipo | Software Developer",
    template: "%s | Matthew Ladipo",
  },
  description:
    "Portfolio website of Matthew Ladipo, a Software Developer specializing in React, Node.js, and modern JavaScript.",
  generator: "matthews production",
  keywords: [
    "Matthew Ladipo",
    "Software Developer",
    "React developer",
    "Node.js developer",
    "Frontend developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Matthew Ladipo | Software Developer",
    description: "Building responsive, user-centric web applications with React, Node.js, and modern JavaScript.",
    url: "https://matthewladipo.dev",
    siteName: "Matthew Ladipo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/IMG_E8662.JPG",
        width: 1200,
        height: 630,
        alt: "Matthew Ladipo portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Ladipo | Software Developer",
    description: "Building responsive, user-centric web applications with React, Node.js, and modern JavaScript.",
    images: ["/IMG_E8662.JPG"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <CookieBanner />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
