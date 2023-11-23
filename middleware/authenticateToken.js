const ApiToken = require('../models/ApiToken');

const authenticateToken = async (req, res, next) => {
    const token = req.headers['x-api-token'];

    if (!token) {
        return res.status(401).json({ message: 'API-токен не предоставлен' });
    }

    try {
        const apiToken = await ApiToken.findOne({ where: { token: token, revokedAt: null } });

        if (!apiToken) {
            return res.status(401).json({ message: 'Неверный или истекший API-токен' });
        }

        // Добавить информацию о токене в объект запроса, если потребуется в последующей обработке
        req.apiToken = apiToken;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при проверке API-токена: ' + error.message });
    }
};

module.exports = authenticateToken;
