"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _uuid = require("uuid");

var _Profile = _interopRequireDefault(require("../models/Profile"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FindProfileService {
  async execute({
    name,
    user_id
  }) {
    const profileRepository = (0, _typeorm.getRepository)(_Profile.default);
    const userRepository = (0, _typeorm.getRepository)(_User.default);
    const findProfile = await profileRepository.findOne({
      where: {
        name
      },
      relations: ['user']
    });

    if (findProfile) {
      if (findProfile.user_id === user_id) {
        throw Error("Nome já utilizado");
      }
    }

    const user = await userRepository.findOne({
      relations: ['profiles'],
      where: {
        id: user_id
      }
    });

    if (!user) {
      throw Error("Identificação de usuário incorreta");
    }

    if (user.profiles.length >= user.max_profile) {
      throw Error("Usuário já atingiu o maximo de 4 perfis");
    }

    const profile = profileRepository.create({
      user_id: (0, _uuid.v4)(),
      name,
      user
    });
    await profileRepository.save(profile);
    return profile;
  }

}

var _default = FindProfileService;
exports.default = _default;