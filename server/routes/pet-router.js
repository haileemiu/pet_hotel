const express = require('express');
const pool = require('../modules/pool.js');

let router = express.Router();

const selectPets = `
SELECT "pet"."id" as "pet_id",
	"pet"."name" as "pet_name", 
	"pet"."breed", "pet"."color", "pet"."is_checked_in", 
	"history"."check_in_date" as "check_in",
	"history"."check_out_date" as "check_out",
	"owner"."id" as "owner_id", 
  "owner"."first_name" as "owner_first_name",
  "owner"."last_name" as "owner_last_name"
FROM "pet" 
LEFT JOIN "owner"
ON "pet"."owner_id" = "owner"."id"
JOIN "history"
ON "pet"."id" = "history"."pet_id"
ORDER BY "pet_id";
`;

// GET 
router.get('/pets', (req, res) => {
  //console.log('In GET /pets router');
  pool.query(selectPets)
    .then((result) => {
      console.log('Pet get router result:', result);
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
                  VALUES ($1, $2, $3, $4) RETURNING "id";`;
  pool.query(query, [req.body.name, req.body.color, req.body.breed, req.body.owner_id])
    .then((result) => {
      returnedId = result.rows[0].id
      console.log('Add post returnedId:',returnedId);
      
      const queryOnReturn = `INSERT INTO "history" ("pet_id")
      VALUES ($1);`
      pool.query(queryOnReturn, [returnedId]).then((results) => res.sendStatus(200));
      //res.sendStatus(201);
    })
    .catch((error) => {
      console.log('ERROR in /pets router POST:', error);
      res.sendStatus(500);
    })
}); // END ADD

// DELETE pet
router.delete('/pets/:id', (req, res) => {

  const query = `DELETE FROM "history" WHERE "pet_id" = $1;`
  pool.query(query, [req.params.id])
    .then(() => {
      const queryOnReturn = `DELETE FROM "pet" WHERE id=$1;`;
      pool.query(queryOnReturn, [req.params.id])

      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('ERROR in /pets delete router', error);
      res.sendStatus(500);
    })
}); // END DELETE

// CHECK pet in or out
router.put('/pets/:id', (req, res) => {
  const query = `UPDATE "pet" SET "is_checked_in" = FALSE WHERE "id"=$1`;
  pool.query(query, [req.params.id])
    .then(() => {
      const queryOnReturn = `
      UPDATE "history"
      SET "check_out_date" = CURRENT_DATE
      WHERE "pet_id"=$1 AND "check_out_date" IS NULL;`;

      pool.query(queryOnReturn, [req.params.id]).then(()=>{
        res.sendStatus(200);
      });
    })
    .catch((error) => {
      console.log('ERROR in /pets put router:', error);
      res.sendStatus(500);
    })
})

module.exports = router;