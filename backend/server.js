const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const contactsRoutes = require('./routes/contacts');

const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

app.use('/contacts', contactsRoutes)

mongodb.initdb((err, db) => {
    if (err) {
        console.error(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${host}:${port}`);
    }
});


