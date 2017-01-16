exports.mapRuleForDb = function(rule) {
  let query = {};
  query[rule.field] = {};
  query[rule.field][rule.condition] = rule.data;
  console.log('Query: ' + query);

  return query;
}