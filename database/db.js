require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDb = () => {
  if (isConnected) {
    console.log('=> Using existing MongoDB connection');
    return Promise.resolve();
  }

  console.log('=> Creating new MongoDB connection');
  return mongoose.connect(process.env.DB_HOST)
    .then(db => { 
      console.log('=> Database connection established')
      isConnected = db.connections[0].readyState;
    })
    .catch(err => {
      console.log('=> Error connecting to database: ', err);
    })
};
