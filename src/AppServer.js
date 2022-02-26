const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

//Declare static path
app.use(express.static(path.join(__dirname, "public")));

//Use Morgan
app.use(morgan('combined'));

//Use Template Engine - handlebars
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Router
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`Example app created on link: http://localhost:${port}`);
})
