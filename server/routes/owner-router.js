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

// POST new owners
router.post('/owners', (req, res) => {
  const query = `INSERT INTO "owner" ("first_name", "last_name") 
                  VALUES ($1, $2);`
  pool.query(query, [req.body.first_name, req.body.last_name])
    .then(() => {
      res.sendStatus(201);
    })                
    .catch((error) => {
      console.log('ERROR in POST /owners router:', error);
      res.sendStatus(500);
    })  
})

// DELETE owner
router.delete('/owners/:id', (req, res) => {
  const query = `DELETE FROM "owner"
                WHERE id=$1;`;
pool.query(query, [req.params.id])
  .then((results) => {
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('ERROR in /owner delete router');
  })
}); // END DELETE


module.exports = router;