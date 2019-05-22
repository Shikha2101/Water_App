const express = require('express');
const router = express.Router();
const Shop = require('../models/shop');

router.get('/shops', function(req, res){
    res.send({type:'GET'});
});

router.post('/shops', function(req, res, next){
    console.log(req.body);
    Shop.create(req.body).then(function(shop){
        res.send(shop);
    }).catch(next);
//     res.send({
//         type:'POST',
//         shopname:req.body.shopname,
//         area:req.body.area
// });
});

router.put('/shops/:id', function(req, res){
    Shop.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(shop){
        Shop.findOne({_id:req.params.id}).then(function(shop){
            res.send(shop);
        });
       
    })
    //res.send({type:'PUT'});
});

router.delete('/shops/:id', function(req, res, next){
    Shop.findByIdAndRemove({_id: req.params.id}).then(function(shop){
        res.send(shop);
    });
    //res.send({type:'DELETE'});
});

router.get('/shops/:id', function(req, res){
    res.send({type:'GET'});
});

// router.get('/shops/:id/cans', function(req, res){
//     res.send({type:'GET'});
// });

// router.post('/shops/:id/cans', function(req, res){
//     res.send({type:'POST'});
// });

// router.put('/shops/:id/cans', function(req, res){
//     res.send({type:'PUT'});
// });

// router.delete('/shops/:id/cans', function(req, res){
//     res.send({type:'DELETE'});
// });

module.exports = router;