// App configuration — values come from environment variables (see .env.example).
//
// NOTE: In a Vite app, VITE_* vars are embedded into the client bundle, so these
// are NOT secret at runtime. That's fine here: the Web3Forms key and the Supabase
// ANON key are both meant to be public (client-side). Never put a truly private
// key (e.g. Supabase service_role) in this file.
//
// Local dev: put values in .env.local (git-ignored).
// Vercel: set them in Project Settings → Environment Variables.

export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
