const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    specialist:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    adress:{
        type:String
    },
    email:{
        type:String
    },
    gender:{
        type:String
    }
});

const Doctor = new mongoose.model('doctor',doctorSchema);
module.exports = Doctor;

