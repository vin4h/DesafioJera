"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateProfileService = _interopRequireDefault(require("../services/CreateProfileService"));

var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const profileRouter = (0, _express.Router)();
profileRouter.use(_ensureAuthenticated.default);
profileRouter.post('/', async (request, response) => {
  try {
    const createProfile = new _CreateProfileService.default();
    const {
      name
    } = request.body;
    const {
      user_id
    } = request.user;
    const profile = await createProfile.execute({
      name,
      user_id
    });
    return response.json(profile);
  } catch (error) {
    return response.status(400).json({
      error: error.message
    });
  }
});
var _default = profileRouter;
exports.default = _default;