const connectToDb = require('../database/db');
const renderError = require('../utils/renderError')
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
        .catch(err => callback(null, renderError(err.statusCode, 'Failed to fetch incidents')))
    });
};
