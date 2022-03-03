const { multipleMongooseToObject, moongoseToObject } = require('../../utility/mongoose');
const Transaction = require('../models/Transaction');
const User_accounts = require('../models/User_account');

const md5 = require('../../utility/md5');
const cookieParser = require('cookie-parser');


class Admin_Transaction {

    show(req, res, next) {
        Transaction.find({})
            .then(transactions => {
                res.render('transaction/transaction', {
                    layout: 'admin', 
                    username: req.cookies.username,
                    title: 'Transactions',
                    transactions: multipleMongooseToObject(transactions)
                })
            })
    }

}

module.exports = new Admin_Transaction;