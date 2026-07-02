import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

// Only create the client if credentials are configured; otherwise `supabase`
// is null and the UI falls back gracefully (no crash before setup).
export const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

export const commentsEnabled = Boolean(supabase);
