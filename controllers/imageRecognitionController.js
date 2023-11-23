const imageRecognitionService = require('../services/imageRecognitionService');
const checkAndUpdateQuota = require('../utils/quotaUtil');
const updateBilling = require('../utils/billingUtil');

const recognizeImage = async (req, res) => {
    try {
        const workspaceId = req.apiToken.workspaceId;
        const image = req.file;

        if (!image) {
            return res.status(400).json({ message: 'Изображение не предоставлено' });
        }

        const usageAmount = 1; // Рассчитать на основе запроса
        const costForTheService = 5; // Определить стоимость

        await checkAndUpdateQuota(workspaceId, usageAmount);
        await updateBilling(workspaceId, costForTheService);

        const response = await imageRecognitionService.recognizeImage(image);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при распознавании изображения: ' + error.message });
    }
};

module.exports = {
    recognizeImage
};
