const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    number:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        default: "Customer"
    },
    division:{
        type: String,
        default: ''
    },
    upazilas:{
        type: String,
        default: ''
    },

    zipCode:{
        type: String,
        default: ''
    },
    district:{
        type: String,
        default: ''
    },
    country:{
        type: String,
        default: ''
    },
    address:{
        type: String,
        default: ''
    },
  
    photo:{
        type:String,
        default: ''
    }, 
    password: { 
        type: String, 
        required: true 
    },
    isVerified: { 
        type: Boolean, 
        default: false 
    },
    verificationCode: { 
        type: String ,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
