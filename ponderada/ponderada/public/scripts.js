function carregarTarefas() {
  fetch('/tasks')
    .then(res => {
      if (!res.ok) throw new Error('Erro na requisição: ' + res.status);
      return res.json();
    })
    .then(tasks => {
      const list = document.getElementById('task-list');
      list.innerHTML = '';

      if (!Array.isArray(tasks) || tasks.length === 0) {
        list.innerHTML = '<p>Nenhuma tarefa encontrada</p>';
        return;
      }

      // Agrupar por data
      const tarefasPorData = {};
      tasks.forEach(task => {
        const data = task.data || 'Sem data';
        if (!tarefasPorData[data]) tarefasPorData[data] = [];
        tarefasPorData[data].push(task);
      });

      const datasOrdenadas = Object.keys(tarefasPorData).sort();

      datasOrdenadas.forEach(data => {
        const dataEl = document.createElement('h3');
        dataEl.textContent = formatarDataBonita(data);
        list.appendChild(dataEl);

        const ul = document.createElement('ul');
        tarefasPorData[data].forEach(task => {
          const li = document.createElement('li');
          li.textContent = `${task.hora || '--:--'} - ${task.titulo}: ${task.descricao}`;
          ul.appendChild(li);
        });

        list.appendChild(ul);
      });
    })
    .catch(err => {
      console.error('❌ Erro ao carregar tarefas:', err);
      const list = document.getElementById('task-list');
      list.innerHTML = '<p style="color:red;">Erro ao carregar tarefas</p>';
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
