const ApiError = require('../error/ApiError');
const { Chat, User_chat, User } = require('../models/models');

class ChatController {
  async create(req, res) {
    const { title, userIds } = req.body;
    const chat = await Chat.create({ title });
    const chatId = chat.id;

    for (const userId of userIds) {
      await User_chat.create({ userId, chatId });
    }
    return res.json(chat);
  }
  async getAll(req, res) {
    const chats = await Chat.findAll();
    console.log(chats);
    return res.json(chats);
  }

  async getAllChatsForUser(req, res) {
    const { userId } = req.params;
    const chats_users = await User_chat.findAll({ where: { userId } });
    const chatIds = [];
    for (const chat of chats_users) {
      chatIds.push(chat.id);
    }
    const chats = await Chat.findAll({ where: { id: chatIds } });
    return res.json(chats);
  }

  async getMembers(req, res) {
    const { chatId } = req.params;
    const users_chats = await User_chat.findAll({ where: { chatId } });
    const userIds = [];
    for (const obj of users_chats) {
      const { userId } = obj;
      console.log(userId);
      userIds.push(userId);
    }
    const usersFromModel = await User.findAll({ where: { id: userIds } });
    const users = [];
    for (const user of usersFromModel) {
      const { id, nickname, avatar_image } = user;
      users.push({ id, nickname, avatar_image });
    }
    return res.json(users);
  }
}

module.exports = new ChatController();
