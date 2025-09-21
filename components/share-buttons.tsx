"use client"

import { Button } from "@/components/ui/button"
import { Share2, Twitter, Facebook, Linkedin } from "lucide-react"

interface ShareButtonsProps {
  title: string
  slug: string
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog/${slug}`

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={shareOnTwitter}>
        <Twitter className="h-4 w-4 mr-2" />
        Twitter
      </Button>
      <Button variant="outline" size="sm" onClick={shareOnFacebook}>
        <Facebook className="h-4 w-4 mr-2" />
        Facebook
      </Button>
      <Button variant="outline" size="sm" onClick={shareOnLinkedIn}>
        <Linkedin className="h-4 w-4 mr-2" />
        LinkedIn
      </Button>
    </div>
  )
}