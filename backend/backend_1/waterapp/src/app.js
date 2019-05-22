const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/waterapp');

app.use(bodyParser.json());

app.use('/api', routes);

// app.post('/products', function(req, res) {
//     return res.json({
//         products: ['Hello world']
//     });
// });

app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error:err.message});
});

app.get('/', function(req, res){
    console.log('GET request');
    res.send({
        "shopname":"abc"
    });
});
app.listen(process.env.port || 5000, function(){
    console.log('live');
})

module.exports = app;