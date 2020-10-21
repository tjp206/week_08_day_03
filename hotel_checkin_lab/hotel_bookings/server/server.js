const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(parser.json())

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('hotel_bookings');
    const bookingsCollection = db.collection('hotel_bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});