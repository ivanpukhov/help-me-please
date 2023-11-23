const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

// URL внешнего сервиса распознавания изображений
const PROVIDED_API_URL = 'http://localhost:4003/recognize';

const recognizeImage = async (imageFile) => {
    try {
        // Создание объекта FormData для отправки файла
        const formData = new FormData();
        formData.append('image', fs.createReadStream(imageFile.path));

        // Делаем POST-запрос с изображением
        const response = await axios.post(PROVIDED_API_URL, formData, {
            headers: {
                ...formData.getHeaders()
            }
        });

        // Очистка: удаление временного файла изображения
        fs.unlinkSync(imageFile.path);

        return response.data; // Возвращаем данные, полученные от API распознавания изображений
    } catch (error) {
        // Удаляем временный файл в случае ошибки
        if (fs.existsSync(imageFile.path)) {
            fs.unlinkSync(imageFile.path);
        }
        throw new Error('Ошибка при распознавании изображения: ' + error.message);
    }
};

module.exports = {
    recognizeImage
};
