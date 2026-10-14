CREATE TABLE "keepalive" (
	"id" integer PRIMARY KEY NOT NULL,
	"pinged_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "keepalive" ENABLE ROW LEVEL SECURITY;