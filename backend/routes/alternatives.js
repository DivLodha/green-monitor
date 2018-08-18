const express = require('express');
const router = express.Router();
const bodyParser=require('body-parser');
const alternatives = require('../models/alternatives');
router.get('/get-alternatives',function(req,res){
    alternatives.find({},function(err,result){
        res.send(result);
    })
})

router.post('/add-alternative',function(req,res){
    alternatives.create({
        name: '',
        type: '',
        description: ''
    },function(err,result){
        res.send(result);
    })
})

router.put('/change-alternative', function(req, res){
    alternatives.findByIdAndUpdate({
        _id: req.body._id
    }, {$set: {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description
    }}, function(err, result){
        res.send(result);
    })
})

router.delete('/delete-alternative',function(req,res){
    alternatives.findByIdAndRemove({
        _id: req.body._id     
    }, function(err, result){
        res.send(result);
    })
})

module.exports = router;
