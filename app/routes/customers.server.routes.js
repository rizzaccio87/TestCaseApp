const customers = require('../../app/controllers/customers.server.controller');

module.exports = function(app) {
  app.route('/api/customers').get(customers.list);

  app.route('/api/customers/:ndg').get(customers.read);

  app.param('ndg', customers.getCustomerByNdg);
};