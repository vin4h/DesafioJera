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

class CreateProfileService {
  async execute({
    name,
    id
  }) {
    const profileRepository = (0, _typeorm.getRepository)(_Profile.default);
    const userRepository = (0, _typeorm.getRepository)(_User.default);
    const user = await userRepository.findOne({
      relations: ['profiles'],
      where: {
        id
      }
    });

    if (!user) {
      throw Error("Identificação de usuário incorreta");
    }

    const findProfile = user.profiles.filter(profile => profile.name === name);

    if (findProfile.length > 0) {
      throw Error("Nome já utilizado");
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

var _default = CreateProfileService;
exports.default = _default;