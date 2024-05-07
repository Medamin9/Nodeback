const mongoose = require ('mongoose')

const reservationSchema = new mongoose.Schema({

    ClientName : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
    },
    category :{
        type : String,
        require:true,
    },
    diponibility : {
        type : Date,
        required : true
    }
})


module.exports = mongoose.model('Reservation',reservationSchema);