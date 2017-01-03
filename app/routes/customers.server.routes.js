const customers = require('../../app/controllers/customers.server.controller');

module.exports = function(app) {
  app.route('/customers').get(customers.list);
};