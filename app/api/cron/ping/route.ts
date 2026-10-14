import { sql } from "drizzle-orm";
import { config } from "@/lib/config";
import { db } from "@/lib/db";
import { keepalive } from "@/lib/db/schema";

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (!config.CRON_SECRET || auth !== `Bearer ${config.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  await db
    .insert(keepalive)
    .values({ id: 1 })
    .onConflictDoUpdate({
      target: keepalive.id,
      set: { pingedAt: sql`now()` },
    });

  return new Response("ok");
}
