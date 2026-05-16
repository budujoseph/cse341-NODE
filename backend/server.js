const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const contactsRoutes = require('./routes/contacts');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');


const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cors())
  .use('/contacts', contactsRoutes)
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


mongodb.initdb(err => {
  if (err) {
    console.error(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${host}:${port}`);
  }
});
