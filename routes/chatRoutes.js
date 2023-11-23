const express = require('express');
const chatController = require('../controllers/chatController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// Эндпоинт для создания нового разговора
router.post('/conversation', authenticateToken, chatController.createConversation);

// Эндпоинт для отправки сообщения в разговор
router.post('/conversation/:conversation_id', authenticateToken, chatController.sendPromptToConversation);

// Эндпоинт для получения частичного ответа на разговор
router.get('/conversation/:conversation_id', authenticateToken, chatController.getPartialResponse);

module.exports = router;
