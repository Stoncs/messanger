const Router = require('express');
const messageController = require('../controllers/messageController');
const router = new Router();

router.post('/', messageController.create);
router.get('/', messageController.getAll);
router.get('/all/:chatId', messageController.getAllMessagesChat);
router.get('/last/:chatId', messageController.getLastMessageChat);
router.get('/:id', messageController.getAll);

module.exports = router;
