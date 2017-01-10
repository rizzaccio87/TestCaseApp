const Customer = require('mongoose').model('Customer');

exports.list = function(req, res, next) {
  Customer.find({}, (err, customers) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(customers);
    }
  });
};

exports.read = function(req, res) {
    res.json(req.customer);
};

exports.getCustomerByNdg = function(req, res, next, ndg) {
  Customer.findOne({'ndgCode' : ndg}).exec((err, customer) => {
      if (err) return next(err);
      if (!customer) return next(new Error('Failed to load customer ' + ndg));

      // If a customer is found use the 'request' object to pass it to the next middleware
      req.customer = customer;

      // Call the next middleware
      next();
  });
};