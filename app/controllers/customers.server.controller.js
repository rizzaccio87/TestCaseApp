const Customer = require('mongoose').model('Customer');
const QueryMapper = require('../core/querymapper');

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

exports.search = function(req, res) {
  console.log(req.body);
  let query = QueryMapper.mapRuleForDb(req.body);

  console.log('Query created: ' + query[req.body.field]);

  Customer.find(query, 'institute ndgCode typeNdg heading').exec((err, customers) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(customers);
    }
  });
};

exports.query = function(req, res) {
    //TODO: ricreare la query composta per mongodb
    console.log(req.body);

    let query = QueryMapper.mapQueryForDb(req.body);

    Customer.find(query, 'institute ndgCode typeNdg heading').exec((err, customers) => {
      if (err) {
        return next(err);
      } else {
        res.status(200).json(customers);
      }
    });
}