const knex = require("knex");
const configuration = require("../../knexfile");
/* Essa é a forma de setar variáveis ambientes*/
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development

const connection = knex(config);

module.exports = connection;
