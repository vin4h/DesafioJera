"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../config/auth"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthenticateUserService {
  async execute({
    headerToken
  }) {
    const usersRepository = (0, _typeorm.getRepository)(_User.default);

    try {
      const decoded = (0, _jsonwebtoken.verify)(headerToken, _auth.default.jwt.secret);
      const {
        sub
      } = decoded;
      const user = await usersRepository.findOne({
        relations: ['profiles'],
        where: {
          id: sub
        }
      });

      if (!user) {
        throw Error('Usuário incorreto');
      }

      const token = headerToken;
      return {
        token,
        user
      };
    } catch (error) {
      throw new Error('JWT invalido');
    }
  }

}

var _default = AuthenticateUserService;
exports.default = _default;