const config = require('./config');
const mongoose = require('mongoose');

module.exports = function() {
  const db = mongoose.connect(config.db);

  require('../app/models/customer.server.model');

  return db;
};