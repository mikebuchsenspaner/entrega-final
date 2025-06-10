Este projeto consiste em uma aplicação web desenvolvida com Node.js, Express.js e Supabase, com o objetivo de funcionar como uma agenda digital de compromissos e tarefas. A proposta é oferecer uma ferramenta simples e eficiente para que os usuários possam cadastrar, visualizar e organizar suas atividades de forma prática.

A estrutura da aplicação segue o padrão MVC (Model-View-Controller), permitindo uma separação clara entre a lógica de negócio, a interface e o gerenciamento dos dados. As informações são armazenadas em um banco de dados PostgreSQL, disponibilizado via Supabase, e o frontend consome as rotas do backend por meio da Fetch API.

 Funcionalidades
Cadastro de tarefas com título, descrição, data e hora

Exibição automática das tarefas em formato de tabela

Armazenamento seguro dos dados no Supabase

Interface amigável acessível via navegador

Tecnologias Utilizadas
Node.js e Express.js (servidor e rotas)

Supabase com PostgreSQL (armazenamento de dados)

HTML, CSS e JavaScript (frontend)

Fetch API (comunicação entre frontend e backend)

dotenv (gestão de variáveis de ambiente)

Desafios e Soluções
Um dos principais desafios enfrentados foi a exibição das tarefas cadastradas de forma organizada na interface do usuário. Inicialmente, houve dificuldades na integração entre o backend e o frontend para apresentar os dados corretamente. A solução adotada foi utilizar a Fetch API para buscar os dados em formato JSON e inseri-los dinamicamente no DOM, estruturando-os em uma tabela clara e funcional. Essa abordagem garantiu uma visualização mais intuitiva e uma experiência de uso fluida.


