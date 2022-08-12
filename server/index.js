require('dotenv').config();
const express = require('express');

const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');

const PORT = process.env.PORT;

const app = express();

// Чтобы приложение могло парсить json
app.use(express.json());
// Чтобы можно было отправлять запросы с браузера
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// Обработка ошибок, последний Middleware
app.use(errorHandler);

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
