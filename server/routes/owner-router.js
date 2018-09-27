const express = require('express');
const pool = require('../modules/pool.js');

let router = express.Router();

// GET Owners & number of pets
router.get('/owners', (req, res) => {
  console.log('In GET /owners router');
  const query = `SELECT "owner".*, COUNT("pet") as "number_of_pets"
                  FROM "owner" 
                  JOIN "pet" 
                  ON "owner"."id" = "pet"."owner_id"
                  GROUP BY "owner"."id";`

  pool.query(query)
    .then((result) => {
      console.log(result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR in router GET /owners:', error);
      res.sendStatus(500);
    })
}); // END GET

module.exports = router;