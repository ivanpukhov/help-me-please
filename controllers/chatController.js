const chatService = require('../services/chatService');
const checkAndUpdateQuota = require('../utils/quotaUtil');
const updateBilling = require('../utils/billingUtil');

// Создание разговора
const createConversation = async (req, res) => {
    try {
        const workspaceId = req.apiToken.workspaceId;
        const usageAmount = 1; // Рассчитать на основе запроса
        const costForTheService = 5; // Определить стоимость

        await checkAndUpdateQuota(workspaceId, usageAmount);
        await updateBilling(workspaceId, costForTheService);

        const response = await chatService.createConversation();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при создании разговора: ' + error.message });
    }
};

// Отправка сообщения в разговор
const sendPromptToConversation = async (req, res) => {
    try {
        const workspaceId = req.apiToken.workspaceId;
        const { conversation_id } = req.params;
        const { prompt } = req.body;

        const usageAmount = 1; // Рассчитать на основе запроса
        const costForTheService = 5; // Определить стоимость

        await checkAndUpdateQuota(workspaceId, usageAmount);
        await updateBilling(workspaceId, costForTheService);

        const response = await chatService.sendPromptToConversation(conversation_id, prompt);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при отправке сообщения: ' + error.message });
    }
};

// Получение частичного ответа
const getPartialResponse = async (req, res) => {
    try {
        const workspaceId = req.apiToken.workspaceId;
        const { conversation_id } = req.params;

        const usageAmount = 0.5; // Меньше, так как это только запрос статуса
        const costForTheService = 2.5; // Меньшая стоимость

        await checkAndUpdateQuota(workspaceId, usageAmount);
        await updateBilling(workspaceId, costForTheService);

        const response = await chatService.getPartialResponse(conversation_id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении ответа на сообщение: ' + error.message });
    }
};

module.exports = {
    createConversation,
    sendPromptToConversation,
    getPartialResponse
};
