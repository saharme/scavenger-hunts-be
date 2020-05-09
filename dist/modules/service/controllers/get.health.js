"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHealth = getHealth;

var _httpStatus = _interopRequireDefault(require("http-status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * the health controller serves as a ping healthcheck to always respond with HTTP 200
 * for all calls made to it to represent it is up and functional
 */
function getHealth(request, response) {
  return response.status(_httpStatus["default"].OK).send();
}