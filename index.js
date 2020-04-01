const express = require('express');
const port = 3035;
const setupDB = require('./config/database');
const router = require('./config/routes');

const app = express();
app.use('/', router);

setupDB();
app.use(express.json());

app.listen(port, function(){
    console.log("running on port ", port);
})