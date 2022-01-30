const express = require('express');
const app = express();

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get('/', function (req, res) {
    res.send('This is an implementation of Request Header Parser Microservice proposed by FreeCodeCamp');
});

app.get('/api/whoami', function (req, res) {
    console.log(req);
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
});

app.listen(3000);
