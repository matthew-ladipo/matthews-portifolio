"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

interface CommentsSectionProps {
  postId: number
}

export function CommentsSection({ postId }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!author.trim() || !content.trim()) return

    const newComment: Comment = {
      id: Date.now(),
      author: author.trim(),
      content: content.trim(),
      date: new Date().toISOString()
    }

    setComments([...comments, newComment])
    setAuthor("")
    setContent("")
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4">
          <Input
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <Textarea
            placeholder="Your comment"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            required
          />
        </div>
        <Button type="submit">Post Comment</Button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="border-0 shadow-sm">
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{comment.author}</span>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm mb-2">{comment.content}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(comment.date)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}