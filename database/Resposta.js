const sequelize = require('sequelize');
const connect = require('./database');

const Resposta = connect.define('resposta',{
    corpo: {
        type: sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Resposta;