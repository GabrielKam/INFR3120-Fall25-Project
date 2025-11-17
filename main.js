import express from 'express';
const app = express();
const port = 4000;
import route from './routes/routes.js';
import path from 'path';
import db from './db/db.js';
import bodyParser from 'body-parser';
//bodyparcer
app.use(bodyParser.urlencoded({extended:false}));

//database
db()
// static files
app.use(express.static(path.join(process.cwd(), 'public')))

// setup for ejs 
app.set('view engine ', 'ejs')
app.set('views', './views')
//routes
app.use('/', route);

app.listen(port, ()=>{
    console.log('Server is running at http://localhost:${port}')
})