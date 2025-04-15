const express = require('express');
const cors = require('cors');
const config = require('./src/config/config');

const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

// Iniciar servidor
app.listen(config.PORT, () => {
    console.log(`Servidor rodando na porta ${config.PORT}`);
});
