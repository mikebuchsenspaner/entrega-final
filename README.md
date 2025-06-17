# Agenda de Compromissos

Este projeto é uma aplicação web simples para organização de tarefas por data, desenvolvida como parte da entrega final do curso. A aplicação permite criar e visualizar tarefas com base em suas datas de agendamento, sendo ideal para uso pessoal ou acadêmico.

## 🔧 Tecnologias Utilizadas

- Node.js
- Express.js
- Supabase (PostgreSQL na nuvem)
- EJS (para renderizar as views)
- HTML/CSS/JavaScript
- dotenv
- Body-parser (se usado)
- Cors

## 🚀 Funcionalidades

- ✅ Criação de tarefas com data e descrição
- 📅 Organização das tarefas por data
- 🗑️ Exclusão de tarefas
- 🌐 Interface web simples com páginas EJS

## 🧠 Desafios Enfrentados

Durante o desenvolvimento, um dos maiores desafios foi integrar a criação de tarefas no banco de dados com a exibição dessas tarefas nas páginas da aplicação. No início, as tarefas eram enviadas corretamente ao Supabase, mas não apareciam na interface do usuário.

A solução envolveu ajustar a lógica das rotas e garantir que os dados fossem buscados e renderizados corretamente nas views. Foram feitos ajustes no controller e na view EJS para sincronizar a exibição dos dados recém-criados, resolvendo o problema.

## 🛠️ Como Executar Localmente

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPO>
   cd <PASTA_DO_PROJETO>


Instale as dependências:

bash
Copiar
Editar
npm install
Crie um arquivo .env com as variáveis de ambiente (chave da Supabase, URL do banco etc.):

ini
Copiar
Editar
SUPABASE_URL=...
SUPABASE_KEY=...
Inicie o servidor:

bash
Copiar
Editar
node server.js
Acesse em http://localhost:3000
