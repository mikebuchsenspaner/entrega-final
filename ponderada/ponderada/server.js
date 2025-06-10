const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

require('dotenv').config();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas de tarefas
const taskRoutes = require('./routes/taskRoutes');
app.use('/', taskRoutes);

// 🆕 Rotas de compromissos (agenda)
const appointmentRoutes = require('./routes/appointments');
app.use('/appointments', appointmentRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
