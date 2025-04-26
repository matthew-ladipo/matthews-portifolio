import Link from "next/link"
import {MailIcon,ArrowUpIcon} from "lucide-react"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 md:px-6 border-t bg-background/50">
    <div className="container mx-auto max-w-5xl">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section - Copyright + Quick Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-muted-foreground text-sm md:text-base">
            © {currentYear} Matthew Ladipo. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm">
            Crafted with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
  
        {/* Middle Section - Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link 
            href="#about" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
            aria-label="About Section"
          >
            About
          </Link>
          <Link 
            href="#projects" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
            aria-label="Projects Section"
          >
            Projects
          </Link>
          <Link 
            href="#experience" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
            aria-label="Experience Section"
          >
            Experience
          </Link>
          <Link 
            href="#blog" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
            aria-label="Blog Section"
          >
            Blog
          </Link>
          <Link 
            href="#contact" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
            aria-label="Contact Section"
          >
            Contact
          </Link>
        </nav>
  
        {/* Right Section - Social Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/matthew-ladipo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/ladipo-matthew-764482261" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:matthewladipo@gmail.com" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email Me"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
  
      {/* Secondary Footer Row (Optional) */}
      <div className="mt-6 pt-6 border-t border-muted/50 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Privacy/Terms Links */}
        <div className="flex gap-4 text-xs text-muted-foreground">
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms of Use
          </Link>
        </div>
  
        {/* Back to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          aria-label="Back to top"
        >
          <ArrowUpIcon className="h-3 w-3" />
          Back to Top
        </button>
      </div>
    </div>
  </footer>
  )
}
