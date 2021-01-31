"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Profile = _interopRequireDefault(require("../models/Profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FindProfilesService {
  async execute({
    user_id
  }) {
    const profileRepository = (0, _typeorm.getRepository)(_Profile.default);
    const getAllProfiles = await profileRepository.find({
      where: {
        user_id
      }
    });
    return getAllProfiles;
  }

}

var _default = FindProfilesService;
exports.default = _default;