const express = require('express');
const app = express();

const PORT = 3000;


app.get('/', function(req, res) {
    res.send("Hello Home page");
})
app.get('/anthony', function(req, res) {
    res.send('Salut Anthony');
})
app.get('/hello', function (req, res) {
  res.send('Hello World');
});


app.listen(PORT, function () {
    console.log(`Starting server on port ${PORT}`);
});
