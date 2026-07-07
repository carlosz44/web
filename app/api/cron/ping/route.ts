import { publicConfig } from "@/lib/config.public";

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const res = await fetch(
    `${publicConfig.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/health`,
    {
      headers: {
        apikey: publicConfig.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return new Response(`supabase ping failed: ${res.status}`, {
      status: 502,
    });
  }

  return new Response("ok");
}
