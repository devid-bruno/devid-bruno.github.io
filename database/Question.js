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

question.sync({force: false}).then(() => {
    console.log("Tabela criada com sucesso!");
}).catch((erro) => {
    console.log("Erro ao criar a tabela: " + erro);
});


module.exports = question;