import express from 'express';
import readController from "../controllers/readController.js";
const router = express.Router();
import { homeController, createController } from '../controllers/homeController.js';


// create page (form)
router.get('/', homeController);

// handle the form submit
router.post('/create', createController);

// read page
router.get('/read', readController);

export default router;