const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', function (req, res) {
    // res.sendFile('index.html', {root: __dirname});
    res.send({'status': 0, 'response': 'It Works'})
});

app.get('/route', function (req, res) {
    // res.sendFile('index.html', {root: __dirname});
    res.send({'status': 0, 'response': 'Route Works'})
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
