"use client"
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <BackToTop />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
