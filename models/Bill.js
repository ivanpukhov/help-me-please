// models/Bill.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Bill = sequelize.define('Bill', {
    workspaceId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalCost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    billDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Bill;
