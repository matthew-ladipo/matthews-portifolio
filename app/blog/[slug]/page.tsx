// app/blog/[slug]/page.tsx
import React from "react"
import { Calendar, Clock, User, ArrowLeft, Eye } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TableOfContents } from "@/components/table-of-contents"
import { RelatedPosts } from "@/components/related-posts"
import { CommentsSection } from "@/components/comments-section"
import { ShareButtons } from "@/components/share-buttons"
import { formatDate } from "@/lib/utils"
import { Metadata } from "next"
import { cache } from "react"
import ReactMarkdown from "react-markdown"

// Mock database - replace with actual data fetching
const blogPosts = [
  {
    id: 1,
    title: "How I Optimized a React App's Performance",
    date: "2023-03-15",
    slug: "optimize-react-app",
    author: "Jane Developer",
    excerpt:
      "Learn how to significantly improve your React application's performance with these proven techniques.",
    content: `
## Improving React Performance
I optimized a React app by using:
- Code splitting
- Memoization
- Lazy loading components

### Code Splitting
Code splitting allows you to split your code into smaller chunks that can be loaded on demand.

### Memoization
Memoization helps prevent unnecessary re-renders by caching expensive computations.

### Lazy Loading
Lazy loading components only when they're needed reduces the initial bundle size.
    `,
    tags: ["React", "Performance", "JavaScript"],
    image: "https://www.simform.com/wp-content/uploads/2019/04/react_app_performance.jpg",
    views: 1245,
    readTime: 5,
  },
  {
    id: 2,
    title: "Building APIs with Node.js and Express",
    date: "2023-01-22",
    slug: "nodejs-express-api",
    author: "John Backend",
    excerpt:
      "A comprehensive guide to building robust APIs using Node.js and Express framework.",
    content: `
## Building APIs
Express makes it easy to handle routes, middlewares, and authentication.

### Route Handling
Express provides a simple way to define routes and handle HTTP requests.

### Middleware
Middleware functions can modify requests and responses or perform additional logic.

### Authentication
Implementing authentication in Express is straightforward with various strategies available.
    `,
    tags: ["Node.js", "Express", "API", "Backend"],
    image: "https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/10227551/og_image/optimized/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
    views: 892,
    readTime: 4,
  },
  {
    id: 3,
    title: "Modern CSS Techniques for 2023",
    date: "2023-04-10",
    slug: "css-grid-layouts",
    author: "Sarah Designer",
    excerpt:
      "Explore the latest CSS features and techniques that will elevate your web designs.",
    content: `
## Modern CSS Features
CSS has evolved significantly with new features like:
- Grid and Flexbox
- Custom Properties
- Container Queries

### CSS Grid
Grid layout provides a two-dimensional layout system for the web.

### Custom Properties
CSS variables allow for more maintainable and dynamic styling.

### Container Queries
The future of responsive design that responds to container sizes rather than viewport.
    `,
    tags: ["CSS", "Frontend", "Design"],
    image: "https://www.classcentral.com/report/wp-content/uploads/2023/03/CSS-Layout-BCG-Banner.png",
    views: 1567,
    readTime: 6,
  },
]

// Cache the data fetching
const getPost = cache((slug: string) => {
  return blogPosts.find((p) => p.slug === slug)
})

const getAllPosts = cache(() => {
  return blogPosts
})

// ✅ Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | EduRepo Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | EduRepo Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// ✅ Generate static params
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

// ✅ Page component
export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPost(params.slug)

  if (!post) return notFound()

  // Extract headings for table of contents (supports ##, ###, ####)
  const headings = post.content
    .split("\n")
    .filter((line) => /^#{2,6}\s/.test(line))
    .map((heading) => {
      const level = heading.match(/^#+/)?.[0].length ?? 2
      const text = heading.replace(/^#+\s/, "").trim()
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      return { text, level: level - 2, id }
    })

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents Sidebar */}
        {headings.length > 0 && (
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        )}

        {/* Main Content */}
        <article className="lg:col-span-2">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>

              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share Buttons */}
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2
                    id={String(props.children)
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}
                    className="scroll-mt-20 text-2xl font-bold mt-8 mb-4"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    id={String(props.children)
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}
                    className="scroll-mt-20 text-xl font-semibold mt-6 mb-3"
                    {...props}
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <Separator className="my-8" />

          {/* Share Section */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4">
              Enjoyed this article?
            </h3>
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          {/* Comments Section */}
          <CommentsSection postId={post.id} />
        </article>

        {/* Related Posts Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <RelatedPosts currentPostId={post.id} />
          </div>
        </aside>
      </div>
    </div>
  )
}

// utils.ts (unchanged)
