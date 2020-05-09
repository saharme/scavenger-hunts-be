import express from 'express';
import {serviceRouter} from './service/routes/service.routes';
import {clientRouter} from './client/routes/client.routes';

const modulesRouter = express.Router();

modulesRouter.use('/service', serviceRouter);
modulesRouter.use('/', clientRouter);

export {
 modulesRouter
};