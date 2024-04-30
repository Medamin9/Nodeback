const mongoose = require('mongoose')


const partnerSchema = new mongoose.Schema({

    partnerName : {
        type : String,
        required : true,
        unique :true
    },
    category :{
        type : String,
        require:true,
    },
    photo : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model('Partner',partnerSchema);