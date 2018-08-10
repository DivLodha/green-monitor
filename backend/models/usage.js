//import mongoose as it is dealing with database

const mongoose = require('mongoose');


//create schema on database variable

const Schema = mongoose.Schema;
const UsageSchema = new Schema ({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    units: {
        type: String,        
    },
    reading: {
        type: Number,
    },    
    deviceId: {
        type: Schema.Types.ObjectId,
        required: true
    }
    })
   
module.exports = User = mongoose.model("usage",UsageSchema);
