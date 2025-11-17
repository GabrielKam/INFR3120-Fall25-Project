import express from 'express';
const route = express.Router();
import { homeController } from '../controllers/homeController.js';

route.get('/', homeController);

route.get('/delete', function(req, res, next) {
  res.render('delete', { title: 'About us',displayName: req.user?req.user.displayName:"" });
});

export default route;