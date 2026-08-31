import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tnqajlfwavbyntazlnwl.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_bwAw64Ps_ZLEwlP0Cgz3oQ_UBTPOSkh';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
