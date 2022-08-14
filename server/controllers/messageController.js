const { Message, User, User_chat } = require('../models/models');
const { getMembers } = require('./chatController');

class MessageController {
  async create(req, res) {
    const { chatId, userId, text } = req.body;
    const date = new Date();
    const message = await Message.create({ chatId, userId, date, text });
    return res.json(message);
  }
  async getAll(req, res) {
    const messages = await Message.findAll();
    return res.json(messages);
  }
  async getAllMessagesChat(req, res) {
    const { chatId } = req.params;
    console.log('chatId', chatId);
    // getting users
    const users_chats = await User_chat.findAll({ where: { chatId } });
    const userIds = [];
    for (const obj of users_chats) {
      const { userId } = obj;
      userIds.push(userId);
    }
    console.log('userIds', userIds);
    const messagesChat = await Message.findAll({
      where: { chatId },
      include: {
        model: User,
        attributes: ['id', 'username', 'avatar_image'],
        where: {
          id: userIds,
        },
      },
    });

    return res.json(messagesChat);
  }

  async getLastMessageChat(req, res) {
    const { chatId } = req.params;
    const lastMessageChat = await Message.findAll({
      attributes: ['text', 'date', 'userId'],
      where: { chatId },
      order: [['date', 'DESC']],
      limit: 1,
    });
    return res.json(lastMessageChat);
  }
}

module.exports = new MessageController();
