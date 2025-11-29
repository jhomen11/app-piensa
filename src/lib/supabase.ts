import { createClient } from '@supabase/supabase-js'

// Estos valores deben ser reemplazados por los reales de tu proyecto Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tu-proyecto.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'tu-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
