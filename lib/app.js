const express = require('express');
const app = express();
const itemRoutes = require('./routes/farts');
const logger = require('../lib/middleware/logger');
const notFound = require('../lib/middleware/notFound');

app.use(express.json());

app.use(logger);

app.use('/api/v1/farts', itemRoutes);

app.use(notFound);

module.exports = app;
