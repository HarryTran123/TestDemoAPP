const mongoose = require('mongoose');

const USER = 'dungdoan';
const PASSWORD = 'admin123';
const DB_NAME = 'ATNShop';

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://' +
        USER +
        ':' +
        PASSWORD +
        '@cluster0.f86rv.mongodb.net/' +
        DB_NAME +
        '?retryWrites=true&w=majority'
    );
    console.log('Connect succesfully!!');
  } catch (error) {
    console.log('Connect failure');
  }
}

module.exports = { connect };
