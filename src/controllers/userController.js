const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

let users = [];

class UserController {
    static async register(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ error: 'Username e senha são obrigatórios' });
            }

            const userExists = users.find(user => user.username === username);
            if (userExists) {
                return res.status(400).json({ error: 'Usuário já existe' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = {
                id: uuidv4(),
                username,
                password: hashedPassword
            };

            users.push(newUser);
            res.status(201).json({ message: 'Usuário registrado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao registrar usuário' });
        }
    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ error: 'Username e senha são obrigatórios' });
            }

            const user = users.find(u => u.username === username);
            if (!user) {
                return res.status(400).json({ error: 'Usuário não encontrado' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Senha inválida' });
            }

            const token = jwt.sign(
                { userId: user.id },
                config.SECRET_KEY,
                { expiresIn: config.JWT_EXPIRATION }
            );

            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao fazer login' });
        }
    }
}

module.exports = UserController; 