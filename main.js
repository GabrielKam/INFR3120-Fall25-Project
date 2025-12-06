import express from 'express';
const app = express();
const port = 4000;
import router from './routes/routes.js';
import path from 'path';
import db from './db/db.js';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import flash from 'connect-flash';
import cors from 'cors';
import { User } from './models/user.js';

// Set-up Express Session
app.use(session({
  secret:"Somesecret",
  saveUninitialized:false,
  resave:false
}));

app.use(cors({
  origin:["https://infr3120-fall25-project-6zzx.onrender.com/",
  ],
  credentials: true
}));

// initialize flash
app.use(flash());
// user authentication
passport.use(User.createStrategy());
// serialize and deserialize the user information
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// initialize the passport
app.use(passport.initialize());
app.use(passport.session());

import bodyParser from 'body-parser';
//bodyparcer
app.use(express.urlencoded({ extended: true}));

//database
db()
// static files
app.use(express.static(path.join(process.cwd(), 'public')))

// setup for ejs 
app.set('view engine', 'ejs')
app.set('views', './views')
//routes
app.use('/', router);

app.listen(port, ()=>{
    console.log('Server is running at http://localhost:${port}')
})