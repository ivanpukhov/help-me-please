const {DataTypes} = require('sequelize')
const sequelize = require('../database')

const ApiToken = sequelize.define('ApiToken', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    workspaceId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    revokedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
})


module.exports = ApiToken
