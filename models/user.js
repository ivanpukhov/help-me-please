const {DataTypes} = require('sequelize')
const sequelize = require('../database')
const Workspace = require("./workspace");

const User = sequelize.define('User', {

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })


module.exports = User
