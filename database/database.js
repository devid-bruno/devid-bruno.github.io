const sequelize = require('sequelize');

var db = 'heroku_cd3379eadc891dd'

const connect = new sequelize(`${db}`, 'b6955d61deef03', 'c520b3aa', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    timezone: '-03:00'
})


module.exports = connect;