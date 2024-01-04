import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.AUTH_SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  // 로그인 된 경우 - "next-auth.session-token" cookie로 설정
  const session = await getToken({ req, secret, raw: true });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    if (session) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/compose/tweet", "/explore", "/messages", "/search"],
};
