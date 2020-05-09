"use strict";

var _express = _interopRequireDefault(require("express"));

var _modules = require("../modules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = require('path');

function expressWebServer() {
  // Creating an ExpressJS app instance
  var app = (0, _express["default"])();
  app.use(_express["default"]["static"](path.resolve('public')));
  app.use('*', _modules.modulesRouter);
  return app;
}

module.exports = expressWebServer;