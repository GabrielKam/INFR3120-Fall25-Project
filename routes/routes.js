import { updatePageController, updateController, deleteController } from "../controllers/updateController.js";
import express from "express";
import readController from "../controllers/readController.js";
import { homeController, createController } from "../controllers/homeController.js";

import passport from 'passport';
import { User } from '../models/user.js'

const router = express.Router();

router.get("/", homeController);
router.post("/create", createController);
router.get("/read", readController);

router.get("/update/:id", updatePageController);
router.post("/update/:id", updateController);

router.post("/delete/:id", deleteController);

/*router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'Login' });
});

router.get('/register', function(req, res, next) {
  res.render('auth/register', { title: 'Register' });
});*/

// Get method for login
router.get('/login', function(req,res,next){
  if(!req.user)
  {
    res.render('auth/login',
      {
      title:'Login',
      message: req.flash('loginMessage')
      }

    )
  }
  else
  {
    return res.redirect("/")
  }
});

// Post method for login
router.post('/login', function(req,res,next){
  passport.authenticate('local',(err,user,info)=>{
    if(err)
    {
      return next(err);
    }
    if(!user)
    {
      req.flash('loginMessage','AuthenticationError');
      return res.redirect('/login');
    }
    req.login(user,(err)=>{
    if(err)
    {
      return next(err);
    }
    return res.redirect("/read")
    })
  })(req,res,next)
});

// Get method for register
router.get('/register', function(req,res,next){
  if(!req.user)
  {
    res.render('auth/register',
      {
      title:'Register',
      message: req.flash('registerMessage')
      }

    )
  }
  else
  {
    return res.redirect("/")
  }
});

// Post method for register
router.post('/register', function(req,res,next){
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password,
    email:req.body.email,
    displayName: req.body.displayName
  })
  User.register(newUser, req.body.password, (err)=>{
    if(err)
    {
      console.log("Error:Inserting the new user");
      if(err.name=="UserExistingError")
      {
        req.flash('registerMessage','Registration Error:User already Exist');
      }
      return res.render('auth/register',
        {
          title:'Register',
          message:req.flash('registerMessage')
        }
      )
    }
    else{
      return passport.authenticate('local')(req,res,()=>{
        res.redirect("/read");
      })
    }
  })
});
router.get('/logout',function(req,res,next){
req.logout(function(err)
{
  if(err)
  {
    return next(err)
  }
})
res.redirect("/");
})
export default router;
