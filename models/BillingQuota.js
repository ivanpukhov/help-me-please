// models/Quota.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Quota = sequelize.define('Quota', {
    workspaceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    monthlyLimit: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    currentUsage: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    resetDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Quota;
