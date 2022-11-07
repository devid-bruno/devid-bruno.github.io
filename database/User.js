const sequelize = require('sequelize');
const connect = require('./database');

const User = connect.define('user',{
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
});

//User.sync({force: true});

module.exports = User;