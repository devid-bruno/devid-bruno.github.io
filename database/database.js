const sequelize = require('sequelize');

var db = 'heroku_962b58c4e120317'

const connect = new sequelize(`${db}`, 'b5c013690079a7', '79ca1623', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql2',
    timezone: '-03:00'
})

//mysql://:@/?reconnect=true

module.exports = connect;