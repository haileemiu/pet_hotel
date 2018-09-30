const express = require('express');
const pool = require('../modules/pool.js');

let router = express.Router();

router.get('/history', (req, res) => {
  const query = `
  SELECT "owner"."first_name" as "owner_first_name", 
  "owner"."last_name" as "owner_last_name", 
  "pet"."name" as "pet_name", 
  "history"."check_in_date" as "last_check_in", 
  "history"."check_out_date" as "last_check_out"
  FROM "history"
    JOIN "pet"
    ON "history"."pet_id" = "pet"."id"
    JOIN "owner" 
    ON "owner"."id" = "pet"."owner_id"
  ;`;
  pool.query(query).then((result)=> {
    console.log('result.rows:', result.rows);
    res.send(result.rows);
  })
    .catch((error)=> {
      console.log('ERROR in history router', error);
      res.sendStatus(500);
    })
});

module.exports = router;