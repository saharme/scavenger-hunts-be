import express from 'express';
import HttpStatus from 'http-status';
const path = require('path');

export function getClientApp(request, response) {
    response.sendFile(path.resolve('public') + '/temp.html');
}

const clientRouter = express.Router();
clientRouter.get('/', getClientApp);

export { clientRouter };
