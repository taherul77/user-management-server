const express = require('express');
const cors = require('cors');
require('dotenv').config();

// const userRoute = require("./app/modules/user/user.route");

const app = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Route
// app.use('/api/v1/user', userRoute);

app.get('/', (req, res) => {
  res.send('Working Successfully');
});

module.exports = app;
