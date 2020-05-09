"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientApp = getClientApp;
exports.clientRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _httpStatus = _interopRequireDefault(require("http-status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = require('path');

function getClientApp(request, response) {
  response.sendFile(path.resolve('public') + '/index.html');
}

var clientRouter = _express["default"].Router();

exports.clientRouter = clientRouter;
clientRouter.get('/', getClientApp);