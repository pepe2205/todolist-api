const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Token não fornecido' });
        }

        jwt.verify(token, config.SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ error: 'Token inválido ou expirado' });
            }
            req.user = user;
            next();
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro na autenticação' });
    }
};

module.exports = authenticateToken; 