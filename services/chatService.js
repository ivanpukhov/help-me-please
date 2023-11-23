const axios = require('axios');

// Замените этот URL на адрес предоставленного API для чата
const PROVIDED_API_URL = 'http://localhost:4001';

const createConversation = async () => {
    try {
        // Запрос на создание нового разговора
        const response = await axios.post(`${PROVIDED_API_URL}/conversation`);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при создании разговора: ' + error.message);
    }
};

const sendPromptToConversation = async (conversationId, prompt) => {
    try {
        // Отправка сообщения в существующий разговор
        const response = await axios.post(`${PROVIDED_API_URL}/conversation/${conversationId}`, { prompt });
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при отправке сообщения: ' + error.message);
    }
};

const getPartialResponse = async (conversationId) => {
    try {
        // Получение частичного ответа на разговор
        const response = await axios.get(`${PROVIDED_API_URL}/conversation/${conversationId}`);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при получении ответа: ' + error.message);
    }
};

module.exports = {
    createConversation,
    sendPromptToConversation,
    getPartialResponse
};
