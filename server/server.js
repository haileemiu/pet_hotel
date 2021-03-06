const express = require('express');
const bodyParser = require('body-parser');
const ownerRouter = require('./routes/owner-router');
const petRouter = require('./routes/pet-router')
const historyRouter = require('./routes/history-router')

const PORT = process.env. PORT || 5000; 

const app = express();

app.use(express.static('server/public'));

app.use(bodyParser.json());

app.use('/pet_hotel', ownerRouter);
app.use('/pet_hotel', petRouter);
app.use('/pet_hotel', historyRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});