// import { auth } from "@/auth";
// import { NextRequest, NextResponse } from "next/server";
// export const runtime = "edge";

// const protectedRoutes = ["/middleware"];

// export default async function Middleware(request: NextRequest) {
//   const session = await auth();

//   const isProtected = protectedRoutes.some((route) =>
//     request.nextUrl.pathname.startsWith(route)
//   );

//   if (!session && isProtected) {
//     const absoluteUrl = new URL("/", request.nextUrl.origin);
//     return NextResponse.redirect(absoluteUrl.toString());
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
// export const runtime = "experimental-edge";

const protectedRoutes = ["/middleware"];

export default async function Middleware(request: NextRequest) {
  const session = await auth();

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!session && isProtected) {
    const absoluteUrl = request.nextUrl.clone();
    absoluteUrl.pathname = "/";
    return NextResponse.redirect(absoluteUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
