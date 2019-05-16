const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let User = require('./user.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/users', {useNewUrlPArse: true});
const connection = mongoose.connection;

connection.once('open', function(){
console.log("MongoDB database connection established successfully");
})

userRoutes.route('/').get(function(req,res){
    User.find(function(err, users){
        if(err){
        console.log(err);
        } else {
        res.json(users);
        }
    });
  });

userRoutes.route('/:id').get(function(req,res){
    let id req.params.id;
    User.findById(id, function(err, todo){
        res.json(user);
    });
});

userRoutes.route('/update/:id').post(function(req,res){

})

app.listen(PORT, function(){
    console.log("Server is running on Port: "+PORT);
});