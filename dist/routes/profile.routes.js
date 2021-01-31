"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _FindProfilesService = _interopRequireDefault(require("../services/FindProfilesService"));

var _CreateProfileService = _interopRequireDefault(require("../services/CreateProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const profileRouter = (0, _express.Router)();
profileRouter.get('/', async (request, response) => {
  try {
    const {
      user_id
    } = request.body;
    const findProfiles = new _FindProfilesService.default();
    const profiles = await findProfiles.execute({
      user_id
    });
    return response.json(profiles);
  } catch (error) {
    return response.status(400).json({
      error: error.message
    });
  }
});
profileRouter.post('/', async (request, response) => {
  try {
    const createProfile = new _CreateProfileService.default();
    const {
      name,
      user_id
    } = request.body;
    const profile = await createProfile.execute({
      name,
      user_id
    });
    delete profile.user.password;
    return response.json(profile);
  } catch (error) {
    return response.status(400).json({
      error: error.message
    });
  }
});
var _default = profileRouter;
exports.default = _default;