const express = require('express');
const app = express();
const itemRoutes = require('./routes/farts');

app.use(express.json());

app.use('/api/v1/farts', itemRoutes);

module.exports = app;
