const { v4: uuidv4 } = require('uuid');

let tasks = [];

class TaskController {
    static getAllTasks(req, res) {
        try {
            const userTasks = tasks.filter(task => task.userId === req.user.userId);
            res.json(userTasks);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar tarefas' });
        }
    }

    static createTask(req, res) {
        try {
            const { title, description } = req.body;

            if (!title || !description) {
                return res.status(400).json({ error: 'Título e descrição são obrigatórios' });
            }

            const task = {
                id: uuidv4(),
                userId: req.user.userId,
                title,
                description,
                done: false,
                createdAt: new Date()
            };

            tasks.push(task);
            res.status(201).json(task);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar tarefa' });
        }
    }

    static updateTask(req, res) {
        try {
            const { id } = req.params;
            const { title, description, done } = req.body;

            const taskIndex = tasks.findIndex(t => t.id === id && t.userId === req.user.userId);
            
            if (taskIndex === -1) {
                return res.status(404).json({ error: 'Tarefa não encontrada' });
            }

            const task = tasks[taskIndex];
            
            if (title !== undefined) task.title = title;
            if (description !== undefined) task.description = description;
            if (done !== undefined) task.done = done;

            tasks[taskIndex] = task;
            res.json(task);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar tarefa' });
        }
    }

    static deleteTask(req, res) {
        try {
            const { id } = req.params;
            const initialLength = tasks.length;
            
            tasks = tasks.filter(t => !(t.id === id && t.userId === req.user.userId));
            
            if (tasks.length === initialLength) {
                return res.status(404).json({ error: 'Tarefa não encontrada' });
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar tarefa' });
        }
    }
}

module.exports = TaskController; 