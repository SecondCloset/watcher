const connectToDb = require('../database/db');
const Incident = require('../models/Incident');

module.exports.handle = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  connectToDb()
    .then(() => {
      Incident.find()
        .then(data => callback(null, {
          statusCode: 200,
          body: JSON.stringify(data)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Failed to fetch errors'
        }))
    });
};
