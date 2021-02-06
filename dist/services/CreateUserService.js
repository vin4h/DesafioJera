"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _uuid = require("uuid");

var _bcryptjs = require("bcryptjs");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateUserService {
  async execute({
    email,
    password,
    name,
    birthday,
    facebook_id
  }) {
    const userRepository = (0, _typeorm.getRepository)(_User.default);
    const findEmail = await userRepository.findOne({
      where: {
        email
      }
    });

    if (findEmail) {
      throw Error('E-mail já está sendo utilizado');
    }

    if (facebook_id) {
      const findFacebookId = await userRepository.findOne({
        where: {
          facebook_id
        }
      });

      if (findFacebookId) {
        throw Error('Conta do facebook já vinculada a outro usuário');
      }
    }

    const hashedPassword = await (0, _bcryptjs.hash)(password, 8);
    const user = userRepository.create({
      id: (0, _uuid.v4)(),
      email,
      password: hashedPassword,
      name,
      birthday,
      facebook_id
    });
    await userRepository.save(user);
    return user;
  }

}

var _default = CreateUserService;
exports.default = _default;