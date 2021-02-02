"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateUserService {
  async execute({
    id
  }) {
    const userRepository = (0, _typeorm.getRepository)(_User.default);
    const user = await userRepository.findOne({
      relations: ['profiles'],
      where: {
        id
      }
    });
    return user;
  }

}

var _default = CreateUserService;
exports.default = _default;