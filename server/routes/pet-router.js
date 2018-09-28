const express = require('express');
const pool = require('../modules/pool.js');

let router = express.Router();

// GET 
router.get('/pets', (req, res) => {
  console.log('In GET /pets router');
  const query = `SELECT "pet"."id" as "pet_id", 
                  "pet"."name" as "pet_name", "pet"."breed", "pet"."color", "pet"."is_checked_in", 
                  "owner"."id" as "owner_id", "owner"."first_name" as "owner_first_name"
                  FROM "pet" 
                  LEFT JOIN "owner"
                  ON "pet"."owner_id" = "owner"."id"
                  ORDER BY "pet_name";`;

  pool.query(query)
    .then((result) => {
      console.log(result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR in router GET /pets:', error);
      res.sendStatus(500);
    }) 
}) // END GET

// ADD
router.post('/pets', (req, res) => {
  const query = `INSERT INTO "pet" ("name", "color", "breed", "owner_id")
                  VALUES ($1, $2, $3, $4);`;
  pool.query(query, [req.body.name, req.body.color, req.body.breed, req.body.owner_id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('ERROR in /pets router POST:', error);
      res.sendStatus(500);
    })
}); // END ADD

// DELETE pet
router.delete('/pets/:id', (req, res) => {
  const query = `DELETE FROM "pet"
                  WHERE id=$1;`;
pool.query(query, [req.params.id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('ERROR in /pets delete router', error);
    res.sendStatus(500);
  })
}); // END DELETE

// TOGGLE pet in or out
router.put('/pets/:id', (req, res) => {
  const query = `UPDATE "pet" SET "is_checked_in" = NOT "is_checked_in" WHERE "id"=$1`;
  pool.query(query, [req.params.id])
    .then(()=> {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.log('ERROR in /pets put router:', error);
      res.sendStatus(500);
    })
})
module.exports = router;