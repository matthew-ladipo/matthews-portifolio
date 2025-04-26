"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type ProjectType = "all" | "frontend" | "backend" | "fullstack"

interface Project {
  id: number
  title: string
  description: string
  image: string
  type: ProjectType[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "Touch And Pay Tech UI",
      description:
        "Responsive user interface for a payment platform built during my internship at Touch And Pay Technologies.",
      image: "/code.jpg",
      type: ["frontend"],
      technologies: ["React", "JavaScript", "CSS", "RESTful API"],
      liveUrl: "https://example.com/touchandpay",
      githubUrl: "https://github.com/matthew-ladipo/touchandpay-ui",
    },
    {
      id: 2,
      title: "Freelance Client Website",
      description: "Custom website developed for Muritadoh Sodeeq with focus on performance and responsive design.",
      image: "/code.jpg",
      type: ["frontend"],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://example.com/muritadoh",
      githubUrl: "https://github.com/matthew-ladipo/muritadoh-website",
    },
    {
      id: 3,
      title: "Xpertech Solution Group Project",
      description:
        "Full-stack web application developed for Xpertech Solution Group with user authentication and database integration.",
      image: "/code.jpg",
      type: ["fullstack", "backend"],
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      liveUrl: "https://example.com/xpertech",
      githubUrl: "https://github.com/matthew-ladipo/xpertech-solution",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
      image: "/code.jpg",
      type: ["fullstack"],
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/matthew-ladipo/ecommerce-platform",
    },
    {
      id: 5,
      title: "Task Management API",
      description: "RESTful API for task management with authentication and authorization features.",
      image: "/code.jpg",
      type: ["backend"],
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/matthew-ladipo/task-api",
    },
  ]

  const filteredProjects = projects.filter((project) => activeFilter === "all" || project.type.includes(activeFilter))

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent work showcasing my skills in frontend, backend, and full-stack development.
        </p>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveFilter("all")}>
                All Projects
              </TabsTrigger>
              <TabsTrigger value="frontend" onClick={() => setActiveFilter("frontend")}>
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" onClick={() => setActiveFilter("backend")}>
                Backend
              </TabsTrigger>
              <TabsTrigger value="fullstack" onClick={() => setActiveFilter("fullstack")}>
                Full-Stack
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden flex flex-col h-full">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-3">
                    {project.liveUrl && (
                      <Button asChild variant="default" size="sm">
                        <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2">
                          <Github size={16} />
                          GitHub
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="frontend" className="mt-0">
            {/* Content will be shown through the filtered projects */}
          </TabsContent>
          <TabsContent value="backend" className="mt-0">
            {/* Content will be shown through the filtered projects */}
          </TabsContent>
          <TabsContent value="fullstack" className="mt-0">
            {/* Content will be shown through the filtered projects */}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
