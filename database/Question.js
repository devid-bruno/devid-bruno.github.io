const sequelize = require('sequelize');
const connect = require('./database');

const question = connect.define('pergunta',{
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: sequelize.TEXT,
        allowNull: false
    }
});


module.exports = question;