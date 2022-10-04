const sequelize = require('sequelize');

var db = 'heroku_466a2a69a79072f'

const connect = new sequelize(`${db}`, 'b4cc72465aee31', 'f06cfbbe', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    timezone: '-03:00'
})

if(connect){
    console.log("Conectado com sucesso");
}else(error) => {
    console.log("Erro ao conectar" + error);
}

module.exports = connect;