"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, Download, ArrowDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false)
    }, 2000)
    // In a real implementation, you would link to an actual PDF file
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-4 md:px-6 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Matthew Ladipo</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Software Developer</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="max-w-2xl text-muted-foreground mb-8 text-lg">
          Building responsive, user-centric web applications with React, Node.js, and modern JavaScript.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Link
          href="mailto:matthewladipo@gmail.com"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail size={18} />
          <span>matthewladipo@gmail.com</span>
        </Link>
        <Link
          href="tel:09134941429"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Phone size={18} />
          <span>09134941429</span>
        </Link>
        <Link
          href="https://linkedin.com/in/ladipo-matthew-764482261"
          target="_blank"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </Link>
        <Link
          href="https://github.com/matthew-ladipo"
          target="_blank"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={18} />
          <span>GitHub</span>
        </Link>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Button onClick={scrollToProjects} variant="default" className="gap-2 relative overflow-hidden group">
          <span className="relative z-10">View My Projects</span>
          <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          <ArrowDown size={16} className="relative z-10" />
        </Button>
        <Button
          onClick={handleDownload}
          variant="outline"
          className="gap-2 relative overflow-hidden group"
          disabled={isDownloading}
        >
          <span className="relative z-10">{isDownloading ? "Downloading..." : "Download Resume"}</span>
          <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          <Download size={16} className="relative z-10" />
        </Button>
      </motion.div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <ArrowDown size={24} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
