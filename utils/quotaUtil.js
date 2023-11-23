// utils/quotaUtil.js

const Quota = require('../models/BillingQuota');

const checkAndUpdateQuota = async (workspaceId, usage) => {
    const quota = await Quota.findOne({ where: { workspaceId } });

    if (!quota) {
        throw new Error('Квота для данного workspaceId не найдена');
    }

    const newUsage = quota.currentUsage + usage;
    if (newUsage > quota.monthlyLimit) {
        throw new Error('Превышена квота использования');
    }

    quota.currentUsage = newUsage;
    await quota.save();
};

module.exports = checkAndUpdateQuota;
