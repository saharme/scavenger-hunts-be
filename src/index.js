import http from 'http';
import  expressWebServer  from './webServer';

const app = expressWebServer()
  const server = http.createServer(app);
  server.listen(8000);

  // Get server IP address and port binding
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : `port ${addr.port}`;

  /**
 * Display startup message
 */
  server.on('listening', () => {
    const startupMessage = `SH backend is listening on ${bind}`;
    const lineSeparator = Array(startupMessage.length + 1).join('-');
    console.log(lineSeparator);
    console.info(startupMessage);
    console.log(lineSeparator);
  });

  // .catch((e) => {
  //   console.log('ERROR: Server failed');
  //   console.log(`ERROR: ${JSON.stringify(e.stack)}`);
  // });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });




// app.listen(8000, () => {
//   console.log('Example app listening on port 8000!')
// });