import express from 'express';
const route = express.Router();
import { homeController, createController } from '../controllers/homeController.js';
import StudentModel from '../models/schema.js';

route.get('/', homeController);
route.post('/', createController);

route.get('/delete', function(req, res, next) {
  res.render('delete', { title: 'Delete',displayName: req.user?req.user.displayName:"" });
});

route.get('/update', function(req, res, next) {
  res.render('update', { title: 'Update',displayName: req.user?req.user.displayName:"" });
});

route.get('/read', async(req, res) =>{
  try{
    const studentData = await StudentModel.find();
    res.render('read', {title: "Read", studentData});
  } catch (err) {
    res.send("Somethings Wrong");
  }
  
});

export default route;