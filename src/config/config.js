require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    SECRET_KEY: process.env.SECRET_KEY || 'chave-secreta-super-segura',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h'
}; 