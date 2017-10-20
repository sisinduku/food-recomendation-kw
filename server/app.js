const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const restaurantRoute = require('./routes/restaurantRoute');
const loginRoute = require('./routes/loginRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use('/api/restaurant', restaurantRoute);
app.use('/api/login', loginRoute);
app.listen(process.env.PORT || 3000, () => {
  console.log('Hello from port: 3000');
});
