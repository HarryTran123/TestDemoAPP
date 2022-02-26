const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const route = require('./routes');

const app = express();
const port = 3000;

//Declare static path
app.use(express.static(path.join(__dirname, "public")));

//Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Use Morgan
// app.use(morgan('combined'));

//Use Template Engine - handlebars
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Router
route(app)


app.listen(port, () => {
    console.log(`Example app created on link: http://localhost:${port}`);
})
