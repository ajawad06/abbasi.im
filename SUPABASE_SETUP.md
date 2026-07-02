# Supabase setup — blog comments

The blog comment system (comments displayed under each article + the count shown
on the blog cards) is powered by a free Supabase project. Until it's configured,
the comment form still works visually (shows a thank-you) and cards read
"No Comments". Follow these 3 steps to make it live.

## 1. Create a project
1. Go to https://supabase.com → sign in → **New project** (free tier is fine).
2. Once it's ready, open **Project Settings → API** and copy:
   - **Project URL** (e.g. `https://abcdefgh.supabase.co`)
   - **anon public** API key (the long `eyJ...` string — safe to use in client code)

## 2. Create the table (SQL)
Open **SQL Editor → New query**, paste the following, and click **Run**:

```sql
-- Comments table
create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  article_slug text not null,
  name text not null,
  email text,
  website text,
  body text not null,
  created_at timestamptz not null default now()
);

-- Lock the table down with Row Level Security
alter table public.comments enable row level security;

-- Anyone (the anon role) may POST a comment...
grant insert on public.comments to anon;
create policy "public can insert comments"
  on public.comments for insert to anon with check (true);

-- ...but reads go through this view, which OMITS the email column,
-- so commenters' emails are never exposed publicly.
create or replace view public.public_comments as
  select id, article_slug, name, website, body, created_at
  from public.comments;

grant select on public.public_comments to anon;
```

> Emails are still stored in the `comments` table (visible to you in the Supabase
> dashboard for moderation), but they are never returned to the website — the site
> only reads the `public_comments` view.

## 3. Add the credentials (env vars)
**Local dev:** open `.env.local` (git-ignored) and fill in:

```
VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR-ANON-PUBLIC-KEY
```

Restart the dev server (`npm run dev`) so Vite picks them up. Comments go live —
posted comments appear under the article for everyone, and counts show on the cards.

**On Vercel:** add the same three variables (`VITE_SUPABASE_URL`,
`VITE_SUPABASE_ANON_KEY`, `VITE_WEB3FORMS_KEY`) under
**Project Settings → Environment Variables**, then redeploy.

## Notes
- The anon key is meant to be public (it only allows what RLS permits: insert a
  comment, read the email-free view). Safe to commit / expose in the client.
- Comments are un-moderated by default (anyone can post). To moderate, you can
  add an `approved boolean default false` column and filter the view on it, then
  approve rows from the Supabase dashboard.
- On Vercel you can instead set these as environment variables later if preferred;
  for now the simple `config.js` approach keeps everything in one place.
