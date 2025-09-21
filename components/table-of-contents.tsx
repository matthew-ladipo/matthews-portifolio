"use client"

import { useEffect, useState } from "react"

interface Heading {
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.text.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Table of Contents</h3>
      <ul className="space-y-1 text-sm">
        {headings.map((heading) => (
          <li key={heading.text} style={{ marginLeft: `${heading.level * 0.5}rem` }}>
            <a
              href={`#${heading.text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className={`block py-1 hover:text-blue-600 transition-colors ${
                activeId === heading.text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                  ? "text-blue-600 font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}