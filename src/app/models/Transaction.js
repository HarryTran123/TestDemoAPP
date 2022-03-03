const mongoose = require('mongoose');

const Transaction = new mongoose.Schema({
    user_id: {type:String},
    payment_info: {type: String},
    total: {type: Number},
    Products: {type: Array}
}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', Transaction, 'Transaction');