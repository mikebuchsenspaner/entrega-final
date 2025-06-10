
const Task = require('../models/taskModel');
const crypto = require('crypto');

exports.list = async (req, res) => {
  try {
    const tasks = await Task.getTasks();
    res.json(tasks);
  } catch (err) {
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
