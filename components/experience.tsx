import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

interface ExperienceItem {
  company: string
  role: string
  period: string
  achievements: string[]
  technologies: string[]
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Xpertech Solution Group",
      role: "Software Developer",
      period: "Current",
      achievements: [
        "Developed dynamic web applications using React, PHP/Laravel, and Django.",
        "Integrated third-party APIs and optimized database performance.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions.",
        "Implemented responsive design principles for optimal user experience across devices.",
      ],
      technologies: ["React", "PHP", "Laravel", "Django", "MySQL"],
    },
    {
      company: "Touch And Pay Technologies",
      role: "Frontend Developer (Internship)",
      period: "2022",
      achievements: [
        "Built responsive UIs for a payment platform using React.",
        "Collaborated with senior developers to implement new features.",
        "Optimized application performance and fixed UI bugs.",
        "Participated in code reviews and agile development processes.",
      ],
      technologies: ["React", "JavaScript", "CSS", "RESTful API"],
    },
    {
      company: "Freelance",
      role: "Web Developer",
      period: "2021 - Present",
      achievements: [
        "Developed client websites with HTML/CSS/JS, focusing on performance.",
        "Created custom solutions for small businesses and individuals.",
        "Managed projects from requirements gathering to deployment.",
        "Provided ongoing maintenance and support for client websites.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React js"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1 bg-primary"></div>
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm font-medium">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
