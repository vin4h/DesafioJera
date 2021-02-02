"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateUserService = _interopRequireDefault(require("../services/CreateUserService"));

var _FindUserService = _interopRequireDefault(require("../services/FindUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRouter = (0, _express.Router)();
userRouter.post('/', async (request, response) => {
  try {
    const createUser = new _CreateUserService.default();
    const {
      email,
      password,
      name,
      birthday,
      facebook_id
    } = request.body;
    const user = await createUser.execute({
      email,
      password,
      name,
      birthday,
      facebook_id
    });
    delete user.password;
    return response.json(user);
  } catch (error) {
    return response.status(400).json({
      error: error.message
    });
  }
});
userRouter.post('/findUser', async (request, response) => {
  try {
    const findUser = new _FindUserService.default();
    const {
      id
    } = request.body;
    const user = await findUser.execute({
      id
    });
    delete user.password;
    return response.json(user);
  } catch (error) {
    return response.status(400).json({
      error: error.message
    });
  }
});
var _default = userRouter;
exports.default = _default;