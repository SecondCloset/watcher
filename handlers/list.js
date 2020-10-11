const connectToDb = require('../database/db');
const renderError = require('../utils/renderError')
const Incident = require('../models/Incident');

module.exports.handle = async (event, context, callback) => {
  connectToDb();
  const incident = await Incident.find();

  if (incident) {
    return {
      statusCode: 200,
      body: JSON.stringify(incident)
    };
  } else {
    return renderError(null, 'Failed to fetch incidents');
  }
};
