// models/ApiUsage.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const ApiUsage = sequelize.define('ApiUsage', {
    workspaceId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    apiTokenId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    serviceType: {
        type: DataTypes.STRING,
        allowNull: false
    },

    durationInSeconds: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    costPerSecond: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    usageDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = ApiUsage;
