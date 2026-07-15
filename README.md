# carlosamoros.com

Personal portfolio site with a private admin panel for managing its content.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, React 19) deployed on Vercel
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) — Postgres database + GitHub OAuth
- [Drizzle ORM](https://orm.drizzle.team/) over `postgres-js` for all data access
- [Zod](https://zod.dev/) + [react-hook-form](https://react-hook-form.com/) for validation and forms

## Architecture

### Routes (`app/`)

- `(site)/` — public portfolio pages: `about`, `projects`, `work`, `xp`, `contact`
- `(auth)/admin/` — CRUD panels for `projects`, `skills`, `work`; guarded by `auth.requireAdmin()`
- `(auth)/login` + `auth/callback` — GitHub OAuth flow via Supabase
- `api/cron/ping` — Supabase keepalive endpoint hit by the Vercel cron (see CLAUDE.md)

### Data layer (`src/lib/db/`)

- `schema.ts` — Drizzle schema: `projects`, `skills`, `work` tables plus `project_type` / `skill_type` enums
- `index.ts` — `db` client (Drizzle over `postgres-js`, direct `DATABASE_URL` connection)
- `admin.ts` — CRUD helpers used by server actions
- `src/lib/queries.ts` — read queries for the public pages

Mutations go through server actions in `src/server/actions/` (one file per entity), which call `auth.requireAdmin()`, validate with the Zod schemas in `src/lib/validation/schemas.ts`, then write via `admin.ts` and revalidate the affected paths.

### Auth (`src/lib/auth/`)

Provider-agnostic `AuthProvider` interface with a Supabase implementation (`supabase/`). Login is GitHub OAuth through Supabase; admin access is restricted to a single GitHub account whose numeric ID must match `ALLOWED_GH_ID`. `proxy.ts` refreshes the Supabase session on every non-static request.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Postgres connection string (Supabase) used by Drizzle and drizzle-kit |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `ALLOWED_GH_ID` | Numeric GitHub user ID allowed into `/admin` |
| `CRON_SECRET` | Bearer token required by `/api/cron/ping` |

## Development

```bash
npm run dev          # start dev server
npm run lint         # eslint
npm run format       # prettier

npm run db:generate  # generate migration from schema changes
npm run db:migrate   # apply migrations in drizzle/
npm run db:push      # push schema directly (no migration file)
npm run db:seed      # seed via scripts/seed.ts
```
