const { multipleMongooseToObject, moongoseToObject } = require("../../utility/mongoose");
const Admin_products = require("../models/Product");
const Catalogs = require("../models/Catalog");
const md5 = require('../../utility/md5');
const cookieParser = require("cookie-parser");

class Product_Admin {

    // [get] /admin/products
    show(req, res, next) {
        if(typeof req.cookies.username == 'undefined') {
            res.redirect('/admin');
          };
        Catalogs.find({})
            .then(Catalogs => {
                Catalogs = multipleMongooseToObject(Catalogs);
                Admin_products.find({})
                    .then(products => {
                        products = multipleMongooseToObject(products)


                        Catalogs.forEach(function(part, indexer) {

                            products.forEach(function(part, index) {
                               
                                if(Catalogs[indexer]._id == products[index].category_id) {
                                    products[index].category_id = Catalogs[indexer].name;
                                    console.log(products[index].category_id);
                                }
                            });
                        });
                        
                        res.render('product/product', {
                            layout: 'admin',
                            title: 'Products',
                            username: req.cookies.username,
                            products
                        })
                    })
                    .catch(next);
            })
            .catch(next);
    }

    delete(req, res, next) {
        Admin_products.deleteOne({
            _id: req.params.id
          })
          .then(() => {
            res.redirect('/admin/products');
          })
          .catch(next);
    }

}

module.exports = new Product_Admin;