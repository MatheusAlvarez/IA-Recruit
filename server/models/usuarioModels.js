const Sequelize = require('sequelize');

const database = require('../config/dbConfig');

const usuarioModels = database.define('usuarios', {
    id:{
        type: Sequelize.INTEGER(4),
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
    },
    nome: Sequelize.STRING(50),
    senha: Sequelize.STRING(100),
    email: Sequelize.STRING(50)
});

database.sync();

module.exports = usuarioModels; 