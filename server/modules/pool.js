const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
  database: 'pet_hotel', 
  host: 'localhost', 
  port: 5432,
  max: 10,
  idelTimeoutMillis: 3000
})

pool.on('connect', () => {
  console.log('postgresql connected!');
});

pool.on('error', (error) => {
  consol.log('error with postgresql pool:', error);
});

module.exports = pool;