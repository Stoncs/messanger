const Sequelize = require('../db');
const ApiError = require('../error/ApiError');
const { Chat, User_chat, User, Message } = require('../models/models');

class ChatController {
  async create(req, res) {
    // title: string, userIds: array
    const { title, userIds } = req.body;
    console.log(req.body);
    const chat = await Chat.create({ title });
    const chatId = chat.id;
    await User_chat.bulkCreate(
      userIds.map((userId) => ({
        userId,
        chatId,
      })),
    );
    return res.json(chat);
  }

  async getAll(req, res) {
    const chats = await Chat.findAll();
    console.log(chats);
    return res.json(chats);
  }

  async getAllChatsForUser(req, res) {
    const { userId } = req.params;
    console.log(req.params);
    const chatIds = await User_chat.findAll({
      attributes: ['chatId'],
      where: {
        userId,
      },
    });

    const result = await Chat.findAll({
      attributes: ['id', 'title', 'createdAt'],
      where: {
        id: [...chatIds.map((obj) => obj.dataValues.chatId)],
      },
    });

    // const result = await Sequelize.query(
    //   `SELECT chats.id, chats.title, messages.date, users.nickname, users.avatar_image FROM chats WHERE (${userId}, chats.id) IN (SELECT * FROM user_chats) JOIN messages ON chats.id = messages.chatId LEFT JOIN users ON messages.userId = ${userId}`,
    // );
    return res.json(result);
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
