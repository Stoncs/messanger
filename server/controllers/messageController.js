const { Message } = require('../models/models');

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
    const messagesChat = await Message.findAll({ where: { chatId } });
    return res.json(messagesChat);
  }
  async getLastMessageChat(req, res) {
    const { chatId } = req.params;
    const messagesChat = await Message.findAll({ where: { chatId } });
    return res.json((messagesChat.length && messagesChat[messagesChat.length - 1]) || {});
  }
}

module.exports = new MessageController();
