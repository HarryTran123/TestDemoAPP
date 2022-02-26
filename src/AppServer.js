const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

//Use Morgan
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Example app created on link: http://localhost:${port}`);
})
