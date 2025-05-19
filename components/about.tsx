import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Code2, Server, Database, Layers, PenTool, Workflow } from "lucide-react"
import MotionSection from "@/components/animations/motion-section"
import FadeIn from "@/components/animations/fade-in"
import StaggeredChildren from "@/components/animations/staggered-children"

export default function About() {
  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className="h-5 w-5" />,
      technologies: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      icon: <Server className="h-5 w-5" />,
      technologies: ["Node.js", "PHP", "Laravel", "Django", "Express"],
    },
    {
      category: "Databases",
      icon: <Database className="h-5 w-5" />,
      technologies: ["MySQL", "MongoDB", "PostgreSQL", "Superbase"],
    },
    {
      category: "Tools & DevOps",
      icon: <Workflow className="h-5 w-5" />,
      technologies: ["Git", "GitHub", "VS Code", "Docker"],
    },
    {
      category: "Design",
      icon: <PenTool className="h-5 w-5" />,
      technologies: ["Figma", "Responsive Design", "UI/UX Principles"],
    },
    {
      category: "Other",
      icon: <Layers className="h-5 w-5" />,
      technologies: ["RESTful APIs", "GraphQL", "Agile Methodology"],
    },
  ]

  return (
    <MotionSection id="about" className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FadeIn className="md:col-span-1 flex justify-center" delay={0.2} direction="left">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/IMG_E8662.JPG"
                alt="Matthew Ladipo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn className="md:col-span-2" delay={0.4} direction="right">
            <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Passionate Software Developer with 3+ years of experience crafting dynamic web apps using React, Node.js,
              and PHP/Laravel. Focused on clean code, performance, and user experience. Committed to continuous learning
              and implementing best practices in software development.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-primary hover:bg-primary/10 transition-colors">
                React
              </Badge>
              <Badge variant="outline" className="text-primary hover:bg-primary/10 transition-colors">
                Node.js
              </Badge>
              <Badge variant="outline" className="text-primary hover:bg-primary/10 transition-colors">
                PHP/Laravel
              </Badge>
              <Badge variant="outline" className="text-primary hover:bg-primary/10 transition-colors">
                JavaScript
              </Badge>
              <Badge variant="outline" className="text-primary hover:bg-primary/10 transition-colors">
                MongoDB
              </Badge>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
        </FadeIn>

        <StaggeredChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          baseDelay={0.2}
          staggerDelay={0.1}
        >
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{skill.icon}</div>
                  <h4 className="text-xl font-medium">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="hover:bg-secondary/80 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredChildren>
      </div>
    </MotionSection>
  )
}
