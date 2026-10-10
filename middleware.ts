import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const protocol = request.headers.get("x-forwarded-proto")
  const host = request.nextUrl.hostname
  const isLocalhost = ["localhost", "127.0.0.1", "0.0.0.0"].includes(host)
  const isHttps = protocol === "https"

  if (process.env.NODE_ENV === "production" && !isHttps && !isLocalhost) {
    const url = request.nextUrl.clone()
    url.protocol = "https:"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
