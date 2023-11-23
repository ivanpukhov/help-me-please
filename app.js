const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const session = require('express-session');
const jwt = require('jsonwebtoken');

// Импорт маршрутов
const chatRoutes = require('./routes/chatRoutes');
const imageGenerationRoutes = require('./routes/imageGenerationRoutes');
const imageRecognitionRoutes = require('./routes/imageRecognitionRoutes');

const app = express();

// Настройка middleware
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(session({
    secret: 'your_secret_key', // Используйте безопасный секретный ключ
    resave: false,
    saveUninitialized: true
}));

// Использование маршрутов
app.use('/api/chat', chatRoutes);
app.use('/api/imagegeneration', imageGenerationRoutes);
app.use('/api/imagerecognition', imageRecognitionRoutes);

// Обработка несуществующих маршрутов
app.use((req, res) => {
    res.status(404).send('Страница не найдена');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});

module.exports = app;
