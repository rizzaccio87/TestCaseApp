exports.mapRuleForDb = function(rule) {
  return computeRule(rule);
}

exports.mapQueryForDb = function(query) {
  let composedQuery = computeQuery(query);
  return composedQuery;
}

const computeRule = function(rule) {
  let query = {};
  query[rule.field] = {};
  query[rule.field][rule.condition] = rule.data;
  console.log('Query: ' + query);

  return query;
}

const computeQuery = function(group) {
  let logicalQuery = {};
  logicalQuery[group.operator] = [];
  
  for (let i = 0; i < group.rules.length; i++) {
    let rule = group.rules[i];
    let dbRule;
    
    if (rule.group) {
      // sub group -> logical query
      dbRule = computeQuery(rule.group);
    }
    else {
      // sub rule -> comparison query
      dbRule = computeRule(rule);
    }

    logicalQuery[group.operator].push(dbRule);
  }
  
  return logicalQuery;
}