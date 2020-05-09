"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _get = require("../controllers/get.health");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var serviceRouter = _express["default"].Router();

exports.serviceRouter = serviceRouter;
serviceRouter.get('/health', _get.getHealth);