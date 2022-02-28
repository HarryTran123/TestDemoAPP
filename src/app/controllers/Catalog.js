const Catalogs = require("../models/Catalog");
const { multipleMongooseToObject, moongoseToObject } = require("../../utility/mongoose");
const md5 = require('../../utility/md5');
const cookieParser = require("cookie-parser");
const res = require("express/lib/response");
const { redirect } = require("express/lib/response");


class Catalog {
  show(req, res, next) {
    res.render('product/catalog/catalog'), {
      layout: 'admin',
    };
  }
}

module.exports = new Catalog();
