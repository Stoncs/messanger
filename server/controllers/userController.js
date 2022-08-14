const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const generateJwt = (id, username) => {
  return jwt.sign({ id, username }, process.env.SECRET_KEY, { expiresIn: '24h' });
};

class UserController {
  // Для добавления картинки
  // const {img} = req.files
  // let fileName = uuid.v4() + ".jpg"
  // img.mv(path.resolve(__dirname, '..', 'static', fileName))
  // const device = await Device.create({name, price, brandId, typeId, img: fileName});
  async registration(req, res, next) {
    const { username, password } = req.body;
    if (!username && !password) {
      return next(ApiError.badRequest('Некорректный ник или пароль'));
    }
    const candidate = await User.findOne({ where: { username } });
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким ником уже существует'));
    }
    const hashPassword = await bcrypt.hash(password, 5);

    const avatar_image = 'default_user_avatar.png';
    const user = await User.create({ username, password: hashPassword, avatar_image });
    const token = generateJwt(user.id, username);
    return res.json({ token });
  }

  async change(req, res) {}

  async login(req, res, next) {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return next(ApiError.internal('Ник или пароль не верный'));
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Ник или пароль не верный'));
    }
    const token = generateJwt(user.id, user.username);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.username);
    return res.json({ token });
  }

  async getAll(req, res) {
    const result = await User.findAll({
      attributes: ['id', 'username', 'avatar_image'],
    });
    return res.json(result);
  }
  async getOne(req, res) {
    const { userId } = req.params;
    const result = await User.findOne({
      attributes: ['username', 'avatar_image'],
      where: {
        id: userId,
      },
    });
    return res.json(result);
  }
}

module.exports = new UserController();
