const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json()); // Permite ler JSON no body das requisições

let tasks = []; // Nosso "banco de dados" temporário na memória

app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    const task = {
      id: uuidv4(),
      title,
      description,
      done: false,
      createdAt: new Date()
    };
    tasks.push(task);
    res.status(201).json(task);
});
  
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.put('/tasks/:id', (req, res) => {
    const { title, description, done } = req.body;
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({ error: "Tarefa não encontrada" });
  
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (done !== undefined) task.done = done;
  
    res.json(task);
  });

app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== req.params.id);
    res.status(204).send(); // Sem conteúdo
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
