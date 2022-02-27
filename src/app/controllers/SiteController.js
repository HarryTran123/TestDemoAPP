const Product = require('../models/Product');


class SiteController {
    
    //[get] /
    home(req, res) {

        //Find Products in Database
        Product.find({}, function (err, products) {
            try {
                res.render('home')
            } catch (err) {
                res.status(400).json({error: 'error message'});
            }
        });

        // res.render('home');
    }

    //[get] /about
    about(req, res) {
        res.send('New Detail !!');
    }

}

module.exports = new SiteController;