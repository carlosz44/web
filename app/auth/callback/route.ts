import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const raw = searchParams.get("next") ?? "/admin";
  const next = raw.startsWith("/") && !raw.startsWith("//") ? raw : "/admin";

  if (code && (await auth.exchangeCode(code))) {
    return NextResponse.redirect(`${origin}${next}`);
  }

  return NextResponse.redirect(`${origin}/login?error=auth`);
}
