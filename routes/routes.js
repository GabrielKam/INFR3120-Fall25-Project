import express from 'express';
import readController from "../controllers/readController.js";
const router = express.Router();
import { homeController, createController } from '../controllers/homeController.js';
import StudentModel from '../models/schema.js';


// create page (form)
router.get('/', homeController);

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

// handle the form submit
router.post('/create', createController);

// read page
router.get('/read', readController);

export default router;