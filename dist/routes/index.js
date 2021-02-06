"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("./user.routes"));

var _signin = _interopRequireDefault(require("./signin.routes"));

var _session = _interopRequireDefault(require("./session.routes"));

var _profile = _interopRequireDefault(require("./profile.routes"));

var _watchedmovie = _interopRequireDefault(require("./watchedmovie.routes"));

var _watchlist = _interopRequireDefault(require("./watchlist.routes"));

var _movies = _interopRequireDefault(require("./movies.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/api/v1/users', _user.default);
routes.use('/api/v1/signin', _signin.default);
routes.use('/api/v1/sessions', _session.default);
routes.use('/api/v1/profiles', _profile.default);
routes.use('/api/v1/watchedmovies', _watchedmovie.default);
routes.use('/api/v1/watchlist', _watchlist.default);
routes.use('/api/v1/movies', _movies.default);
var _default = routes;
exports.default = _default;