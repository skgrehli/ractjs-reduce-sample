const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user.route');
const mongoose = require('mongoose');


const PORT = 8080;


//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure mongodb
mongoose.connect('mongodb://localhost/jwtauth');

app.get('/checking', function(req, res){
   res.json({
      "Tutorial": "Welcome to the Node express JWT Tutorial"
   });
});

app.use('/user', user);

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});