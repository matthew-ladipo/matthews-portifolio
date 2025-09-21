import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  slug: string
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      title: "How I Optimized a React App's Performance",
      excerpt:
        "Learn about the techniques I used to improve the performance of a React application, including code splitting, memoization, and lazy loading.",
      date: "March 15, 2023",
      slug: "optimize-react-app",
    },
    {
      title: "Building APIs with Node.js and Express",
      excerpt:
        "A step-by-step guide to creating RESTful APIs using Node.js and Express, with examples of authentication, validation, and error handling.",
      date: "January 22, 2023",
      slug: "nodejs-express-api",
    },
    {
      title: "The Power of CSS Grid for Modern Layouts",
      excerpt: "Discover how CSS Grid can simplify complex layouts and improve responsive design in your web projects.",
      date: "November 10, 2022",
       slug: "css-grid-layouts",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-4">Technical Blog</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Sharing my knowledge and experiences in software development through articles and tutorials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-primary">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>

                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="#" className="flex items-center gap-2">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
