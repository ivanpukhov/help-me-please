const axios = require('axios'); // Предполагаем, что вы используете axios для HTTP-запросов

const API_BASE_URL = 'http://localhost:4002'; // URL внешнего сервиса ИИ для генерации изображений

const generateImage = async (textPrompt) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/generate`, { text_prompt: textPrompt });
        return response.data; // Возвращаем ID задания и другую необходимую информацию
    } catch (error) {
        throw new Error('Ошибка при генерации изображения: ' + error.message);
    }
};

const getJobStatus = async (jobId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/status/${jobId}`);
        return response.data; // Возвращаем статус задания
    } catch (error) {
        throw new Error('Ошибка при получении статуса задания: ' + error.message);
    }
};

const getResult = async (jobId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/result/${jobId}`);
        return response.data; // Возвращаем результат задания
    } catch (error) {
        throw new Error('Ошибка при получении результата задания: ' + error.message);
    }
};

const upscaleImage = async (resourceId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/upscale`, { resource_id: resourceId });
        return response.data; // Возвращаем обновленные данные изображения
    } catch (error) {
        throw new Error('Ошибка при увеличении масштаба изображения: ' + error.message);
    }
};

const zoomInImage = async (resourceId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/zoom/in`, { resource_id: resourceId });
        return response.data; // Возвращаем данные изображения с увеличенным масштабом
    } catch (error) {
        throw new Error('Ошибка при увеличении изображения: ' + error.message);
    }
};

const zoomOutImage = async (resourceId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/zoom/out`, { resource_id: resourceId });
        return response.data; // Возвращаем данные изображения с уменьшенным масштабом
    } catch (error) {
        throw new Error('Ошибка при уменьшении изображения: ' + error.message);
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
