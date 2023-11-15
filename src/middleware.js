import { NextResponse } from "next/server";

const isLoggedIn = false;

export function middleware(req) {
  //   if (!isLoggedIn && req.url === "http://localhost:3000/profile") {
  //     return NextResponse.redirect(new URL("/", req.url));
  //   }
  //   return NextResponse.next();

  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", req.url));

  //   return NextResponse.json({
  //     hello: "middleware",
  //   });
}

export const config = {
  matcher: ["/profile"],
};
