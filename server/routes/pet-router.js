const express = require('express');
const pool = require('../modules/pool.js');

let router = express.Router();

router.get('/pets', (req, res) => {
  console.log('In GET /pets router');
  const query = `SELECT "pet"."id" as "pet_id", 
                  "pet"."name" as "pet_name", "pet"."breed", "pet"."color", "pet"."is_checked_in", 
                  "owner"."id" as "owner_id", "owner"."first_name"
                  FROM "pet" 
                  JOIN "owner"
                  ON "pet"."owner_id" = "owner"."id";`;

  pool.query(query)
    .then((result) => {
      console.log(result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR in router GET /pets:', error);
      res.sendStatus(500);
    })
})



module.exports = router;