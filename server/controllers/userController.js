const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const generateJwt = (id, nickname) => {
  return jwt.sign({ id, nickname }, process.env.SECRET_KEY, { expiresIn: '24h' });
};

class UserController {
  // Для добавления картинки
  // const {img} = req.files
  // let fileName = uuid.v4() + ".jpg"
  // img.mv(path.resolve(__dirname, '..', 'static', fileName))
  // const device = await Device.create({name, price, brandId, typeId, img: fileName});
  async registration(req, res, next) {
    const { nickname, password } = req.body;
    if (!nickname && !password) {
      return next(ApiError.badRequest('Некорректный ник или пароль'));
    }
    const candidate = await User.findOne({ where: { nickname } });
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким ником уже существует'));
    }
    const hashPassword = await bcrypt.hash(password, 5);

    const avatar_image = 'default_user_avatar.png';
    const user = await User.create({ nickname, password: hashPassword, avatar_image });
    const token = generateJwt(user.id, nickname);
    return res.json({ token });
  }

  async change(req, res) {}

  async login(req, res, next) {
    const { nickname, password } = req.body;
    const user = await User.findOne({ where: { nickname } });
    if (!user) {
      return next(ApiError.internal('Ник или пароль не верный'));
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Ник или пароль не верный'));
    }
    const token = generateJwt(user.id, user.nickname);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.nickname);
    return res.json({ token });
  }
}

module.exports = new UserController();
