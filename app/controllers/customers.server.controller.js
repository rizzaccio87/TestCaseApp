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