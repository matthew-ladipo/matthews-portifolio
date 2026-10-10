"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = window.localStorage.getItem("portfolio-cookie-consent")
    setIsVisible(consent === null)
  }, [])

  const handleConsent = (value: "accepted" | "declined") => {
    window.localStorage.setItem("portfolio-cookie-consent", value)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur sm:left-auto sm:right-4 sm:max-w-md">
      <div className="space-y-3">
        <p className="text-sm font-medium">Cookies & privacy</p>
        <p className="text-sm text-muted-foreground">
          I use essential cookies for site functionality. You can accept or decline optional analytics cookies.
        </p>
        <div className="flex gap-2 pt-1">
          <Button size="sm" onClick={() => handleConsent("accepted")}>Accept</Button>
          <Button variant="outline" size="sm" onClick={() => handleConsent("declined")}>Decline</Button>
        </div>
      </div>
    </div>
  )
}
