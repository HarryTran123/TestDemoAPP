const formRouter = require('./form');
const siteRouter = require('./site');

function route(app){

    app.use('/form', formRouter)


    app.use('/', siteRouter)
        

}

module.exports = route;