import "server-only";
import { z } from "zod";

const schema = z.object({
  DATABASE_URL: z.url(),
  ALLOWED_GH_ID: z.coerce.number().int().positive(),
});

const parsed = schema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
  ALLOWED_GH_ID: process.env.ALLOWED_GH_ID,
});

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((i) => `  ${i.path.join(".")}: ${i.message}`)
    .join("\n");
  throw new Error(`Invalid environment variables:\n${issues}`);
}

export const config = parsed.data;
