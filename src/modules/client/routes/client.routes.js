import express from 'express';
import HttpStatus from 'http-status';
const path = require('path');

export function getClientApp(request, response) {
    // return response.status(HttpStatus.OK).send("Client Works well");
    console.log('path: ' + path.resolve('public') + 'index.html')
    response.sendFile(path.resolve('public') + '/index.html');
}

const clientRouter = express.Router();
clientRouter.get('/', getClientApp);

export { clientRouter };
