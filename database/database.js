const sequelize = require('sequelize');

var db = 'heroku_466a2a69a79072f'

const connect = new sequelize(`${db}`, 'b4cc72465aee31', 'f06cfbbe', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    timezone: '-03:00'
}).then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Erro ao conectar: " + erro);
});

module.exports = connect;