const imageGenerationService = require('../services/imageGenerationService');
const checkAndUpdateQuota = require('../utils/quotaUtil');
const updateBilling = require('../utils/billingUtil');

// Генерация изображения
const generateImage = async (req, res) => {
    try {
        const workspaceId = req.apiToken.workspaceId;
        const textPrompt = req.body.text_prompt;

        const usageAmount = 1; // Рассчитать на основе запроса
        const costForTheService = 10; // Определить стоимость

        await checkAndUpdateQuota(workspaceId, usageAmount);
        await updateBilling(workspaceId, costForTheService);

        const response = await imageGenerationService.generateImage(textPrompt);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при генерации изображения: ' + error.message });
    }
};

// Получение статуса задания
const getJobStatus = async (req, res) => {
    try {
        const workspaceId = req.apiToken.workspaceId;
        const jobId = req.params.job_id;

        const usageAmount = 0.1; // Меньше, так как это только запрос статуса
        const costForTheService = 1; // Меньшая стоимость

        await checkAndUpdateQuota(workspaceId, usageAmount);
        await updateBilling(workspaceId, costForTheService);

        const response = await imageGenerationService.getJobStatus(jobId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении статуса задания: ' + error.message });
    }
};

// Получение результата задания
const getResult = async (req, res) => {
    try {
        const workspaceId = req.apiToken.workspaceId;
        const jobId = req.params.job_id;

        const usageAmount = 0.1; // Меньше, так как это только запрос результата
        const costForTheService = 1; // Меньшая стоимость

        await checkAndUpdateQuota(workspaceId, usageAmount);
        await updateBilling(workspaceId, costForTheService);

        const response = await imageGenerationService.getResult(jobId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении результата задания: ' + error.message });
    }
};

// Увеличение масштаба изображения
const upscaleImage = async (req, res) => {
    try {
        const workspaceId = req.apiToken.workspaceId;
        const resourceId = req.body.resource_id;

        const usageAmount = 0.5; // Увеличение масштаба потребляет ресурсы
        const costForTheService = 5; // Стоимость увеличения масштаба

        await checkAndUpdateQuota(workspaceId, usageAmount);
        await updateBilling(workspaceId, costForTheService);

        const response = await imageGenerationService.upscaleImage(resourceId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при увеличении масштаба изображения: ' + error.message });
    }
};

// Приближение изображения
const zoomInImage = async (req, res) => {
    try {
        const workspaceId = req.apiToken.workspaceId;
        const resourceId = req.body.resource_id;

        const usageAmount = 0.5; // Приближение изображения также потребляет ресурсы
        const costForTheService = 5; // Стоимость приближения изображения

        await checkAndUpdateQuota(workspaceId, usageAmount);
        await updateBilling(workspaceId, costForTheService);

        const response = await imageGenerationService.zoomInImage(resourceId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при приближении изображения: ' + error.message });
    }
};


// Отдаление изображения
const zoomOutImage = async (req, res) => {
    try {
        const workspaceId = req.apiToken.workspaceId;
        const resourceId = req.body.resource_id;

        const usageAmount = 0.5; // Отдаление изображения также потребляет ресурсы
        const costForTheService = 5; // Стоимость отдаления изображения

        await checkAndUpdateQuota(workspaceId, usageAmount);
        await updateBilling(workspaceId, costForTheService);

        const response = await imageGenerationService.zoomOutImage(resourceId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при отдалении изображения: ' + error.message });
    }
};


module.exports = {
    generateImage,
    getJobStatus,
    getResult,
    upscaleImage,
    zoomInImage,
    zoomOutImage
};
