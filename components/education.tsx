import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Lagos State University</h3>
                  <p className="text-muted-foreground">B.Sc Computer Science</p>
                  <p className="text-sm text-muted-foreground">2021 - 2024</p>
                  <p className="mt-2">
                    Studied core computer science concepts including algorithms, data structures, software engineering
                    principles, and web development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <CardTitle>Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Microsoft Office Specialist Certification</h3>
                  <p className="text-muted-foreground">LASUCOM ICT</p>
                  <p className="text-sm text-muted-foreground">2022</p>
                  <p className="mt-2">
                    Certified in Microsoft Office applications including Word, Excel, and PowerPoint, demonstrating
                    proficiency in productivity tools.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Web Development Fundamentals</h3>
                  <p className="text-muted-foreground">Online Course</p>
                  <p className="text-sm text-muted-foreground">2021</p>
                  <p className="mt-2">
                    Completed comprehensive training in HTML, CSS, JavaScript, and responsive design principles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
