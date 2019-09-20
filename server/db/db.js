const { Client } = require('pg')

const client = new Client({
  database: 'qa',
  port: 5432,
})

client.connect();

module.exports = client;

