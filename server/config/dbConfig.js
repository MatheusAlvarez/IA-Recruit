const Sequelize = require('sequelize');

// conexão com o BD
const database = new Sequelize('login', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
});

module.exports = database;