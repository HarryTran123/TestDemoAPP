const siteRouter = require('./site');
const adminRouter = require('./admin');
const testRouter = require('./test');


function route(app){

    
    app.use('/admin', adminRouter);

    app.use('/test', testRouter);

    app.use('/', siteRouter);
        

}

module.exports = route;