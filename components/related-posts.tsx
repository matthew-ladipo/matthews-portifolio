import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface RelatedPostsProps {
  currentPostId: number
}

export function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  // This would typically fetch related posts from your data source
  const relatedPosts = [
    {
      id: 2,
      title: "Building APIs with Node.js and Express",
      slug: "nodejs-express-api",
      date: "2023-01-22",
      excerpt: "A comprehensive guide to building robust APIs"
    },
    {
      id: 3,
      title: "Modern CSS Techniques for 2023",
      slug: "modern-css-techniques",
      date: "2023-04-10",
      excerpt: "Explore the latest CSS features and techniques"
    }
  ]

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Related Posts</h3>
      {relatedPosts.map((post) => (
        <Card key={post.id} className="border-0 shadow-sm">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(post.date)}</span>
            </div>
            <p className="text-sm text-muted-foreground">{post.excerpt}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}