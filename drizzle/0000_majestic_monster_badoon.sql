CREATE TYPE "public"."project_type" AS ENUM('project', 'exp');--> statement-breakpoint
CREATE TYPE "public"."skill_type" AS ENUM('front', 'language', 'other');--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(200) NOT NULL,
	"description" text NOT NULL,
	"link" varchar(500),
	"year" integer,
	"type" "project_type" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(200) NOT NULL,
	"start" date NOT NULL,
	"end" date,
	"type" "skill_type" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "work" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company" varchar(200) NOT NULL,
	"role" varchar(200) NOT NULL,
	"description" text NOT NULL,
	"start" date NOT NULL,
	"end" date,
	"location" varchar(200),
	"tech_stack" varchar(500),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
