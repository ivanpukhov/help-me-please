const {DataTypes} = require('sequelize')
const sequelize = require('../database')
const User = require('./user')
const Workspace = sequelize.define('Workspace', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users', // Название модели User
            key: 'id' // Ключ в модели User
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
})


module.exports = Workspace
