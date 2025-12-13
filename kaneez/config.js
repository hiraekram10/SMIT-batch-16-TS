import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.86.0/+esm'

const supabaseUrl = 'https://abksjaynhfduwosafjqt.supabase.co'
const supabaseKey = 'sb_publishable_W5lQDc8EYhRal6HDk8KlVg_QRc8fB_v'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase