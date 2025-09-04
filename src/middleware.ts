import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')

  if (!token) {
    // Redirect to login if no access token
  return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  // Allow the request if token is present
  return NextResponse.next()
}

export const config = {
  // Protected routes — add any additional pages that require authentication here
  matcher: [
    '/cart/:path*',
    '/cart-details/:path*',
    '/wishlist/:path*',
    '/profile/:path*',
    '/payment/:path*',
    '/payment-status/:path*',
    '/address/:path*',
    '/order-confirmation/:path*',
    '/order-details/:path*',
  ],
}