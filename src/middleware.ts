import { NextResponse } from "next/server";
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware() {
    return NextResponse.next(); // <--- This is required
  },
  {
    publicPaths: ["/","/post/:path*"], // Let homepage be public
  }
);

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
