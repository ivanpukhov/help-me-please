const { Sequelize } = require('sequelize');

module.exports = new Sequelize('mobuleb', 'root', 'Pia753!!', {
    host: 'localhost',
    dialect: 'mysql' // или другой диалект, например 'postgres', 'sqlite', 'mssql'
});

