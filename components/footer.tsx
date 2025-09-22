"use client"

import Link from "next/link"
import { MailIcon, ArrowUpIcon, SunIcon, MoonIcon } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { useEffect, useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [time, setTime] = useState("")

  // Get live local time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000) // update every minute
    return () => clearInterval(interval)
  }, [])

 

  return (
    <footer className="py-10 px-4 md:px-6 border-t bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-muted-foreground text-sm md:text-base">
              © {currentYear} Matthew Ladipo. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              Built with Next.js, Tailwind CSS & ❤️
            </p>
            {time && (
              <p className="text-xs text-muted-foreground">
                Current time: {time} (WAT)
              </p>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["about", "projects", "experience", "blog", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://github.com/matthew-ladipo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/ladipo-matthew-764482261"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaTwitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a href="mailto:matthewladipo@gmail.com" className="hover:scale-110 transition-transform">
              <MailIcon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-8 pt-6 border-t border-muted/40 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Privacy/Terms */}
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Us
            </Link>
          </div>

          {/* Newsletter */}
          <form
            className="flex items-center gap-2 border border-muted/50 rounded-lg px-3 py-1.5 w-full md:w-auto"
            onSubmit={(e) => {
              e.preventDefault()
              alert("Subscribed ✅ (mock only)")
            }}
          >
            <input
              type="email"
              placeholder="Subscribe for updates"
              className="bg-transparent outline-none text-sm flex-1"
              required
            />
            <button
              type="submit"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Subscribe
            </button>
          </form>

          {/* Theme Toggle + Back to Top */}
          <div className="flex items-center gap-4">
            

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUpIcon className="h-3 w-3" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
