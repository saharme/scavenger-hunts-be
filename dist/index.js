"use strict";

var _http = _interopRequireDefault(require("http"));

var _webServer = _interopRequireDefault(require("./webServer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _webServer["default"])();

var server = _http["default"].createServer(app);

server.listen(8000); // Get server IP address and port binding

var addr = server.address();
var bind = typeof addr === 'string' ? 'pipe ' + addr : "port ".concat(addr.port);
/**
* Display startup message
*/

server.on('listening', function () {
  var startupMessage = "SH backend is listening on ".concat(bind);
  var lineSeparator = Array(startupMessage.length + 1).join('-');
  console.log(lineSeparator);
  console.info(startupMessage);
  console.log(lineSeparator);
}); // .catch((e) => {
//   console.log('ERROR: Server failed');
//   console.log(`ERROR: ${JSON.stringify(e.stack)}`);
// });