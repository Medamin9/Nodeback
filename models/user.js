const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fisrtName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    companyName : {
        type : String,
    },
    password : {
        type : String,
        required : true 
    },
    createdAt : {
        type : Date, 
        default : Date.now
    }

})
module.exports = mongoose.model('User',userSchema);