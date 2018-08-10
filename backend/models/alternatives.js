//import mongoose as it is dealing with database

const mongoose = require('mongoose');


//create schema on database variable

const Schema = mongoose.Schema;
const AlternativesSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,        
    },
    benefits: {
        type: String,
    },   
    savings: {
        type: Number,
    },    
    picture: {
        type: String,
    }
    })

module.exports = User = mongoose.model("alternatives",AlternativesSchema);
