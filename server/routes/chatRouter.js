const Router = require('express');
const chatController = require('../controllers/chatController');
const router = new Router();

router.post('/', chatController.create);
router.get('/', chatController.getAll);
router.get('/all/:userId', chatController.getAllChatsForUser);
router.get('/members/:chatId', chatController.getMembers);
router.get('/:chatId', chatController.getAll);

module.exports = router;
