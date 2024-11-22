const express = require('express');
const app = express();
require('dotenv').config()

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

require('./startup/db')();
require('./startup/routes')(app);


const port = Number(process.env.APP_PORT) || 8080;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;