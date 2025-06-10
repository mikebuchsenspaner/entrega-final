
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://kiztateekubgbkbvejmt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpenRhdGVla3ViZ2JrYnZlam10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MTA0NTcsImV4cCI6MjA2MjI4NjQ1N30.KFciBdpyuOWSAlS8K9C27ujXlXA9FmQtHRGcaf79gdE';

const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = { supabase };
