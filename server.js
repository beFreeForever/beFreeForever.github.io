const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, './dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const adminServerPort = 8080;

app.get('/', (request, response) => {
    response.sendFile('index.html', {
        root: __dirname
    });
});

app.listen(adminServerPort, () => {
    console.log(`Admin page server started on port ${adminServerPort}`);
});