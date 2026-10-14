import "server-only";
import { z } from "zod";

const schema = z.object({
  DATABASE_URL: z.url(),
  ALLOWED_GH_ID: z.coerce.number().int().positive(),
  CRON_SECRET: z.string().optional(),
});

const parsed = schema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
  ALLOWED_GH_ID: process.env.ALLOWED_GH_ID,
  CRON_SECRET: process.env.CRON_SECRET,
});

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((i) => `  ${i.path.join(".")}: ${i.message}`)
    .join("\n");
  throw new Error(`Invalid environment variables:\n${issues}`);
}

export const config = parsed.data;
