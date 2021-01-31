"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("./user.routes"));

var _session = _interopRequireDefault(require("./session.routes"));

var _profile = _interopRequireDefault(require("./profile.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/users', _user.default);
routes.use('/sessions', _session.default);
routes.use('/profiles', _profile.default);
var _default = routes;
exports.default = _default;