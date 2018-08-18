const express = require('express');
const router = express.Router();
const bodyParser=require('body-parser');
const Device = require('../models/device');
router.get('/get-devices',function(req,res){
    Device.find({},function(err,result){
        res.send(result);
    })
})

router.post('/get-devices-by-user',function(req,res){
    Device.find({userId:req.body.userId},function(err,result){
        res.send(result);
    })
})

router.post('/add-device',function(req,res){
    Device.create({
        name: '',
        deviceType: '',
        powerUsage: 0
    },function(err,result){
        res.send(result);
    })
})

router.put('/change-device', function(req, res){
    Device.findByIdAndUpdate({
        _id: req.body._id
    }, {$set: {
        name: req.body.name,
        deviceType: req.body.deviceType,
        powerUsage: req.body.powerUsage
    }}, function(err, result){
        res.send(result);
    })
})

router.delete('/delete-device',function(req,res){
    Device.findByIdAndRemove({
        _id: req.body._id     
    }, function(err, result){
        res.send(result);
    })
})

module.exports = router;
