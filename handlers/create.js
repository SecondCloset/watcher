const connectToDb = require('../database/db');
const Incident = require('../models/Incident');

module.exports.handle = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDb()
    .then(() => {
      const json = JSON.parse(event.body);
      const params = {
        date: new Date(json.date),
        message: json.message,
        resolved: json.resolved,
        service: json.service
      };
  
      Incident.create(params)
        .then(data => callback(null, {
          statusCode: 200,
          body: JSON.stringify(data)
        }))
        .catch(err => callback(err, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Failed to insert error data'
        }))
    })
}
