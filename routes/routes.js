import express from 'express';
const route = express.Router();
import { homeController } from '../controllers/homeController.js';

route.get('/', homeController);

route.get('/delete', function(req, res, next) {
  res.render('delete', { title: 'Delete',displayName: req.user?req.user.displayName:"" });
});

route.get('/update', function(req, res, next) {
  res.render('update', { title: 'Update',displayName: req.user?req.user.displayName:"" });
});

export default route;