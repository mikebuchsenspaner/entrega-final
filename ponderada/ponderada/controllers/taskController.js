const Task = require('../models/taskModel');
const crypto = require('crypto');

exports.list = async (req, res) => {
  try {
    const tasks = await Task.getTasks();
    console.log("📥 Enviando tarefas:", tasks);
    res.json(tasks);
  } catch (err) {
    console.error("❌ Erro:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const task = { id: crypto.randomUUID(), ...req.body };
    const result = await Task.addTask(task);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// POST /tasks
exports.create = async (req, res) => {
  try {
    // Mostra no terminal o que veio do formulário
    console.log('🚀 Body recebido:', req.body);

    const { titulo, descricao, data, hora } = req.body;

    // Mostra se veio algo faltando
    if (!titulo || !descricao || !data || !hora) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }

    const task = {
      id: crypto.randomUUID(),
      titulo,
      descricao,
      data,
      hora,
    };

    console.log('📦 Task a ser enviada:', task);

    const result = await Task.addTask(task);
    res.json(result);
  } catch (err) {
    console.error('💥 ERRO no POST /tasks:', err);
    res.status(500).json({ error: err.message });
  }
};

// PUT /tasks/done/:id
exports.done = async (req, res) => {
  try {
    const result = await Task.markTaskDone(req.params.id);
    res.json(result);
  } catch (err) {
    console.error('❌ ERRO no PUT /tasks/done/:id:', err);
    res.status(500).json({ error: err.message });
  }
};

// DELETE /tasks/:id
exports.delete = async (req, res) => {
  try {
    const result = await Task.deleteTask(req.params.id);
    res.json(result);
  } catch (err) {
    console.error('❌ ERRO no DELETE /tasks/:id:', err);
    res.status(500).json({ error: err.message });
  }
};
const { supabase } = require('../services/supabase');

exports.list = async (req, res) => {
  const { data, error } = await supabase.from('tasks').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.create = async (req, res) => {
  const { titulo, descricao, data, hora } = req.body;
  const { data: novaTask, error } = await supabase
    .from('tasks')
    .insert([{ titulo, descricao, data, hora }]);

  if (error) return res.status(500).json({ error: error.message });
  res.json(novaTask);
};
