require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

let isConnected;

module.exports = connectToDb = async () => {
  if (isConnected) {
    console.log('=> Using existing MongoDB connection');
    return;
  }

  console.log('=> Creating new MongoDB connection');
  const db = await mongoose.connect(process.env.DB_HOST);

  if (db) {
    isConnected = db.connections[0].readyState;
  } else {
    console.log('=> Error connecting to database: ', err);
    throw Error('Database connection error');
  }

  return db;
};
