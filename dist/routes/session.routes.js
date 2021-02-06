"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthenticationController = _interopRequireDefault(require("../controller/AuthenticationController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sessionsRouter = (0, _express.Router)();
const authController = new _AuthenticationController.default();
sessionsRouter.post('/', async (request, response) => {
  try {
    const authHeader = request.headers.authorization;
    const {
      user,
      token
    } = await authController.session({
      authHeader
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