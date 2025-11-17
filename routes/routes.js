import express from 'express';
const route = express.Router();
import { homeController, createController } from '../controllers/homeController.js';

route.get('/', homeController);
route.post('/', createController);

export default route;