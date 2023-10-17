import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ccabmrvwxjhaqqayvqov.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjYWJtcnZ3eGpoYXFxYXl2cW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1MDg1ODAsImV4cCI6MjAxMzA4NDU4MH0.KG6GCbX1dj243B838ByyYq7swoMxc1fomrvK_5248uw';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
