// utils/billingUtil.js

const Billing = require('../models/Bill');

const updateBilling = async (workspaceId, cost) => {
    const billingRecord = await Billing.findOne({ where: { workspaceId } });

    if (!billingRecord) {
        // Создаем новую запись, если не найдена
        await Billing.create({ workspaceId, totalCost: cost });
    } else {
        // Обновляем существующую запись
        billingRecord.totalCost += cost;
        await billingRecord.save();
    }
};

module.exports = updateBilling;
