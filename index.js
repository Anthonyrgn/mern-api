const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


const userList = ["Thomas", "Charlotte", "Anthony", "Julien"];


app.get('/', function(req, res) {
    // res.sendFile(__dirname + "/public/index.html");
    res.render('index', { 
        title: "From node express",
        userList: userList
    })
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
