const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const restaurantRoute = require('./routes/restaurantRoute');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use('/api/restaurant', restaurantRoute);
app.listen(process.env.PORT || 3000, () => {
  console.log('Hello from port: 3000');
});
