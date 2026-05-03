import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  const shouldRewriteToSubsite =
    hostname === "jumpstone.is-cool.dev" ||
    hostname === "jumpstone-dev.vercel.app";
  const shouldRewriteToLinks = hostname === "connect.henrymeyer.de";

  if (!shouldRewriteToSubsite && !shouldRewriteToLinks) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();

  if (shouldRewriteToSubsite) {
    rewriteUrl.pathname =
      request.nextUrl.pathname === "/"
        ? "/subsite"
        : `/subsite${request.nextUrl.pathname}`;
  } else {
    if (request.nextUrl.pathname === "/robots.txt") {
      rewriteUrl.pathname = "/links/robots.txt";
    } else if (request.nextUrl.pathname === "/sitemap.xml") {
      rewriteUrl.pathname = "/links/sitemap.xml";
    } else {
      rewriteUrl.pathname = "/links";
    }
  }

  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
    "/robots.txt",
    "/sitemap.xml",
  ],
};
