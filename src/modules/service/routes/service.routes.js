import express from 'express';
import {getHealth} from '../controllers/get.health';

const serviceRouter = express.Router();
serviceRouter.get('/health', getHealth);

export {serviceRouter};
