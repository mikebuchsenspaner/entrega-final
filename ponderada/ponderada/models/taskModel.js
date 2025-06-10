const { supabase } = require('../supabase/supabase');

exports.getTasks = async () => {
  const { data, error } = await supabase
    .from('tasks') // ← AQUI É O NOME CORRETO!
    .select('*')
    .order('data', { ascending: true });

  if (error) throw error;
  return data;
};

exports.addTask = async (task) => {
  const { data, error } = await supabase
    .from('tasks') // ← TAMBÉM AQUI!
    .insert([task]);

  if (error) throw error;
  return data;
};
