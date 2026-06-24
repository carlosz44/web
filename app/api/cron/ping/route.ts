import { db } from "@/lib/db";
import { sql } from "drizzle-orm";

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  await db.execute(sql`SELECT 1`);
  return new Response("ok");
}
