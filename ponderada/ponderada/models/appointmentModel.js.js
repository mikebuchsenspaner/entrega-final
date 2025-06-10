const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://kiztateekubgbkbvejmt.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.getAppointments = async () => {
  const { data, error } = await supabase
    .from('compromissos') // <<< AQUI ESTAVA O PROBLEMA!
    .select('*')
    .order('data', { ascending: true });

  if (error) throw new Error(error.message);
  return data;
};
