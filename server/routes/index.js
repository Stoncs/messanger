const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter');
const messageRouter = require('./messageRouter');

router.use('/users', userRouter);
router.use('/chats', chatRouter);
router.use('/messages', messageRouter);

module.exports = router;
