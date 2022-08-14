const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  avatar_image: { type: DataTypes.STRING },
});

const Chat = sequelize.define('chat', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
});

const Message = sequelize.define('message', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.DATE, allowNull: false },
  text: { type: DataTypes.STRING, allowNull: false },
});

const User_chat = sequelize.define('user_chat', {});

User.hasMany(User_chat);
User.hasMany(Message);

Chat.hasMany(User_chat);
Chat.hasMany(Message);

User_chat.belongsTo(User);
User_chat.belongsTo(Chat);
Message.belongsTo(Chat);
Message.belongsTo(User);

module.exports = {
  User,
  Chat,
  Message,
  User_chat,
};
