# Lista de Tarefas (ToDo List)

Uma API RESTful de lista de tarefas desenvolvida com Node.js e Express, incluindo autenticação de usuários.

## 🚀 Funcionalidades

- Autenticação de usuários (registro e login)
- Adicionar novas tarefas
- Listar todas as tarefas do usuário
- Atualizar tarefas existentes
- Marcar tarefas como concluídas
- Remover tarefas
- Proteção de rotas com JWT

## 📋 Pré-requisitos

- Node.js instalado na sua máquina
- NPM (geralmente vem com o Node.js)

## 🔧 Instalação

1. Clone este repositório:
```bash
git clone (https://github.com/pepe2205/todolist-api)
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Copie o conteúdo do arquivo `.env.example` (se existir)
   - Configure as variáveis conforme necessário

## 🎮 Como Usar

Para iniciar o servidor em modo de desenvolvimento:
```bash
npm run dev
```

Para iniciar o servidor em modo de produção:
```bash
npm start
```

## 📡 Endpoints da API

### Autenticação
- `POST /api/users/register` - Registrar novo usuário
- `POST /api/users/login` - Fazer login

### Tarefas
- `GET /api/tasks` - Listar todas as tarefas do usuário
- `POST /api/tasks` - Criar nova tarefa
- `PUT /api/tasks/:id` - Atualizar tarefa
- `DELETE /api/tasks/:id` - Deletar tarefa

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- JWT (JSON Web Tokens)
- Bcrypt (criptografia de senhas)
- UUID (geração de IDs únicos)
- CORS (Cross-Origin Resource Sharing)
- Nodemon (para desenvolvimento)

## 📝 Estrutura do Projeto

```
src/
├── config/         # Configurações da aplicação
├── controllers/    # Controladores da aplicação
├── middlewares/    # Middlewares (autenticação, etc)
└── routes/         # Rotas da API
```

## 🔒 Segurança

- Autenticação baseada em JWT
- Senhas criptografadas com bcrypt
- Proteção de rotas com middleware de autenticação
- Validação de dados de entrada
- Tratamento de erros

## 📄 Licença

Este projeto está sob a licença ISC. 