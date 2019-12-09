const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('view engine', 'ejs');

app.get('/', function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {

    } else {

    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});