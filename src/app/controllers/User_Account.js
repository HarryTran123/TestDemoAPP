const User_accounts = require("../models/User_account");
const { multipleMongooseToObject, moongoseToObject } = require("../../utility/mongoose");
const md5 = require('../../utility/md5');
const cookieParser = require("cookie-parser");


class User_Account {
  
  user(req, res, next) {
      if(typeof req.cookies.username == 'undefined') {
        res.redirect('/admin');
      };
    User_accounts.find({})
    .then(User_accounts =>{
      res.render('accounts/user_account', {
        layout: 'admin',
        title: 'User accounts',
        User_accounts: multipleMongooseToObject(User_accounts),
        username: req.cookies.username
      });
    })
    .catch(next);
  }
  
}

module.exports = new User_Account();
