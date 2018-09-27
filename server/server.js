const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env. PORT || 5000; 

const app = express();

app.use(express.static('server/public'));

app.use(bodyParser.json());

app.use('/pet_hotel', require('./routes/owner-router'));
app.use('/pet_hotel', require('./routes/pet-router'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});