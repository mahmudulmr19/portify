import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
const { auth } = NextAuth(authConfig);
import {
  DEFAULT_LOGIN_REDIRECT_URL,
  authPrefix,
  authRoutes,
  matchRoute,
  publicRoutes,
} from "@/routes";
import { NextResponse } from "next/server";

export default auth((req) => {
  const nextUrl = req.nextUrl;
  const pathname = req.nextUrl.pathname;
  const isLoggedIn = !!req.auth;
  const isAuthApiRoutes = pathname.startsWith(authPrefix);
  const isAuthRoutes = matchRoute(authRoutes, pathname);
  const isPublicRoutes = matchRoute(publicRoutes, pathname);

  if (isAuthApiRoutes) {
    return NextResponse.next();
  }

  if (isAuthRoutes) {
    if (isLoggedIn) {
      return NextResponse.redirect(
        new URL(DEFAULT_LOGIN_REDIRECT_URL, nextUrl)
      );
    }
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoutes) {
    const next = nextUrl.pathname;
    return NextResponse.redirect(
      new URL(`/auth/sign-in?next=${next}`, nextUrl)
    );
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
