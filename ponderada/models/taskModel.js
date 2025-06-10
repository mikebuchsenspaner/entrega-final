
const { supabase } = require('../supabase/supabase');

exports.getTasks = async () => {
  const { data, error } = await supabase.from('compromissos').select('*');
  if (error) throw error;
  return data;
};

exports.addTask = async (task) => {
  const { data, error } = await supabase.from('compromissos').insert([task]);
  if (error) throw error;
  return data;
};
