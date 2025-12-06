import  {createClient} from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://abksjaynhfduwosafjqt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFia3NqYXluaGZkdXdvc2FmanF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMjQ4ODMsImV4cCI6MjA4MDYwMDg4M30.1qnYp84bTzZCGW-CpAefSkpmaYSeVxk824-fptGwano'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase
