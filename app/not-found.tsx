import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you were looking for does not exist or may have moved.
      </p>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </main>
  )
}
