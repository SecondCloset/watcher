const connectToDb = require('../database/db');
const renderError = require('../utils/renderError')
const Incident = require('../models/Incident');

module.exports.handle = async (event, context, callback) => {
  connectToDb();

  const json = JSON.parse(event.body);
  const params = {
    date: new Date(json.date),
    message: json.message,
    resolved: json.resolved,
    service: json.service
  };

  const incident = await Incident.create(params);

  if (incident) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(incident)
    };
  } else {
    return renderError(null, 'Failed to insert incident data');
  }
}
