const express = require('express');
const imageGenerationController = require('../controllers/imageGenerationController');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

// Эндпоинт для инициации генерации изображения
router.post('/generate', authenticateToken, imageGenerationController.generateImage);

// Эндпоинт для получения статуса и прогресса задания по его ID
router.get('/status/:job_id', authenticateToken, imageGenerationController.getJobStatus);

// Эндпоинт для получения результата готового задания по его ID
router.get('/result/:job_id', authenticateToken, imageGenerationController.getResult);

// Эндпоинт для увеличения масштаба сгенерированного изображения
router.post('/upscale', authenticateToken, imageGenerationController.upscaleImage);

// Эндпоинт для увеличения масштаба изображения
router.post('/zoom/in', authenticateToken, imageGenerationController.zoomInImage);

// Эндпоинт для уменьшения масштаба изображения
router.post('/zoom/out', authenticateToken, imageGenerationController.zoomOutImage);

module.exports = router;
