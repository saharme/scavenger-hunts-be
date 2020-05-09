"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modulesRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _service = require("./service/routes/service.routes");

var _client = require("./client/routes/client.routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var modulesRouter = _express["default"].Router();

exports.modulesRouter = modulesRouter;
modulesRouter.use('/service', _service.serviceRouter);
modulesRouter.use('/', _client.clientRouter);