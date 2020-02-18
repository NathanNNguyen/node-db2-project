const knex = require('knex');
const config = require('../knexfile.js').development;

//knex expects a config object 
module.exports = knex(config);