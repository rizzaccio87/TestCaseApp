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

exports.search = function(req, res) {
  console.log(req.body);
  let query = mapRuleForDb(req.body);

  console.log('Query created: ' + query[req.body.field]);

  Customer.find(query, 'ndgCode typeNdg heading').exec((err, customers) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(customers);
    }
  });
};

mapRuleForDb = function(rule) {
  let query = {};
  if (rule.condition === '' || rule.condition === '=') {
    query[rule.field] = rule.data;
    console.log('Query semplice: ' + query);
  }
  else {
    console.log('Query composta!');
  }

  return query;
}