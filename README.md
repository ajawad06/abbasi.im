# Abbasi.im

A redesign of [abbasi.im](https://abbasi.im/); the personal brand & mentorship
site for **Parvez Abbasi** (Founder & Project Director @ National Incubation Center;
Founder & CEO @ AdVentures ).

**Stack:** Vite · React 18 · TypeScript · React Router · plain CSS

**Backend:** Supabase · Web3Forms

## Project structure

```
public/            static assets (images, favicon, hero.png)
src/
  pages/           (Home, Expertise, Podcasts, About, Contact, Gallery, Blog, 6 article pages, 404)
  components/      shared UI (Navbar, Hero, Footer, ArticleShell, …)
  config.ts        reads VITE_* env vars
  supabase.ts      Supabase client
  pageMeta.ts      per-route <title> + meta description
  App.tsx          router + layout
```

## Backend (no server)

- **Contact form → email** via [Web3Forms](https://web3forms.com). Generate a key with the
  destination inbox and set `VITE_WEB3FORMS_KEY`.
- **Blog comments** via [Supabase](https://supabase.com) — comments render under each article
  and the count shows on the blog cards. One-time table setup:

<details>
<summary>Supabase SQL (run once in the SQL Editor)</summary>

```sql
create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  article_slug text not null,
  name text not null,
  email text,
  website text,
  body text not null,
  created_at timestamptz not null default now()
);

alter table public.comments enable row level security;

grant insert on public.comments to anon;
create policy "public can insert comments"
  on public.comments for insert to anon with check (true);

-- public reads via a view that omits email (emails never exposed)
create or replace view public.public_comments as
  select id, article_slug, name, website, body, created_at from public.comments;
grant select on public.public_comments to anon;
```

</details>

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:5173  (or the port shown)
```

### Scripts

| Command             | What it does                         |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Production build → `dist/`           |
| `npm run preview`   | Preview the production build locally |
| `npm run typecheck` | Type-check with `tsc --noEmit`       |

## Environment variables

Set these in `.env.local` (local). They are all
**public client-side keys** — safe to expose, but not committed to git.

| Variable                 | Purpose                                     |
| ------------------------ | ------------------------------------------- |
| `VITE_SUPABASE_URL`      | Supabase project URL (blog comments)        |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon public key                    |
| `VITE_WEB3FORMS_KEY`     | Web3Forms access key (contact form → email) |
