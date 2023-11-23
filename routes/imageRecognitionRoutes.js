const express = require('express');
const imageRecognitionController = require('../controllers/imageRecognitionController');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();

// Эндпоинт для распознавания объектов на изображении
router.post('/recognize', authenticateToken, imageRecognitionController.recognizeImage);

module.exports = router;
