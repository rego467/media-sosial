import { NextResponse } from "next/server";

const { createMiddlewareClient } = require("@supabase/auth-helpers-nextjs");

export async function middleware(req){
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({req, res})

  const {data:{session}} = await supabase.auth.getSession()
  if(!session){
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return res
}

export const config = {
  matcher: "/"
}

