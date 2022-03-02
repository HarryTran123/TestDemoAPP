const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const path = require('path');


const route = require('./routes');
const db = require('./config/db');

const app = express();

const hostname = 'localhost';
const port = process.env.PORT || 3000;



//Declare static path
app.use(express.static(path.join(__dirname, "public")));

//Connect Database
db.connect();

//Middleware
app.use(bodyParser.json({
    limit:1024*1024*10,
    type:'application/json'
}))
app.use(bodyParser.urlencoded({
    extended:true,
    limit:1024*1024*10,
    type:'application/x-www-form-urlencoded' 
}));

//Usign cookies

app.use(cookieParser());



//Use Morgan
// app.use(morgan('combined'));

//Use Template Engine - handlebars
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a+b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Router
route(app)


app.listen(process.env.PORT || port);
console.log(`App created on link: http://${hostname}:${process.env.PORT || port}`);