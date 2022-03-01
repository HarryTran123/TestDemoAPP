const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const path = require('path');
const {google} = require('googleapis');

const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 3000;



//Declare static path
app.use(express.static(path.join(__dirname, "public")));

//Connect Database
db.connect();

//Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

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


app.listen(port, () => {
    console.log(`App created on link: http://localhost:${port}`);
})
