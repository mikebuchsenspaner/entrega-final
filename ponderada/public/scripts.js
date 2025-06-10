
function carregarTarefas() {
  fetch('/tasks')
    .then(res => res.json())
    .then(tasks => {
      const container = document.getElementById('task-list');
      container.innerHTML = '';

      if (!Array.isArray(tasks) || tasks.length === 0) {
        container.innerHTML = '<p>Nenhuma tarefa encontrada</p>';
        return;
      }

      const tarefasPorData = {};

      tasks.forEach(task => {
        const data = task.data || 'Sem data';
        if (!tarefasPorData[data]) {
          tarefasPorData[data] = [];
        }
        tarefasPorData[data].push(task);
      });

      const datasOrdenadas = Object.keys(tarefasPorData).sort();

      datasOrdenadas.forEach(data => {
        const dataEl = document.createElement('h2');
        dataEl.textContent = formatarDataBonita(data);
        container.appendChild(dataEl);

        const ul = document.createElement('ul');
        tarefasPorData[data].forEach(task => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${task.hora || '--:--'}</strong> - <strong>${task.titulo}</strong>: ${task.descricao}`;
          ul.appendChild(li);
        });

        container.appendChild(ul);
      });
    });
}

function formatarDataBonita(dataStr) {
  if (!dataStr.includes('-')) return dataStr;
  const [ano, mes, dia] = dataStr.split('-');
  return `${dia}/${mes}/${ano}`;
}

document.getElementById('task-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  fetch('/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, descricao, data, hora })
  })
    .then(res => res.json())
    .then(() => {
      carregarTarefas();
      e.target.reset();
    });
});

carregarTarefas();
