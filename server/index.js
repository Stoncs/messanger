require('dotenv').config();
const express = require('express');

const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const PORT = process.env.PORT;

const app = express();

// Чтобы можно было отправлять запросы с браузера
app.use(cors());
// Чтобы приложение могло парсить json
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'WORKING!!!!!' });
});
const start = async () => {
  try {
    // Подключение к базе данных
    await sequelize.authenticate();
    // Сверяет состояние БД со схемой данных
    await sequelize.sync();
    app.listen(PORT, () => console.log('server started', PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
