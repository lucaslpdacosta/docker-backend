const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  database: 'sorteiagrupo',
  host: 'db',
  port: 5432,
});

module.exports = pool;