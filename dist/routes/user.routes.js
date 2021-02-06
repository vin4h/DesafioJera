"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UserController = _interopRequireDefault(require("../controller/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRouter = (0, _express.Router)();
const userController = new _UserController.default();
userRouter.post('/', async (request, response) => {
  try {
    const {
      email,
      password,
      name,
      birthday,
      facebook_id
    } = request.body;
    const user = await userController.create({
      email,
      password,
      name,
      birthday,
      facebook_id
    });
    return response.json(user);
  } catch (error) {
    return response.status(400).json({
      error: error.message
    });
  }
});
var _default = userRouter;
exports.default = _default;