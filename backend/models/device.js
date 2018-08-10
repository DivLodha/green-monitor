//import mongoose as it is dealing with database

const mongoose = require('mongoose');


//create schema on database variable

const Schema = mongoose.Schema;
const DeviceSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    deviceType: {
        type: String,
        required: true
    },
    powerUsage: {
        type: Number,
    },
    picture: {
        type: String,
    },
    isPaired: {
        type: Boolean
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }
    })
   

    //export your schema as Device

module.exports = User = mongoose.model("devices",DeviceSchema);
