const sequelize = require('sequelize');

var db = 'heroku_65b1964ba89f8c7'

const connect = new sequelize(`${db}`, 'b22f2d4798a54a', 'd0d3a947', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    timezone: '-03:00'
})

//mysql://b22f2d4798a54a:d0d3a947@us-cdbr-east-06.cleardb.net/?reconnect=true

module.exports = connect;