"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthenticateUserService = _interopRequireDefault(require("../services/AuthenticateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sessionsRouter = (0, _express.Router)();
sessionsRouter.post('/', async (request, response) => {
  try {
    const {
      email,
      password
    } = request.body;
    const authenticateUser = new _AuthenticateUserService.default();
    const {
      user,
      token
    } = await authenticateUser.execute({
      email,
      password
    });
    delete user.password;
    return response.json({
      user,
      token
    });
  } catch (error) {
    return response.status(400).json({
      error: error.message
    });
  }
});
var _default = sessionsRouter;
exports.default = _default;