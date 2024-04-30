const mongoose = require ('mongoose');
const User = require('./user');
const notificationSchema = mongoose.Schema({
    usernotif : {
        type : mongoose.Schema.Types.ObjectId,
        ref : User
    },
    notifName : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    createAt : {
        type : Date, 
        default : Date.now
    }
})


module.exports = mongoose.model('Notification',notificationSchema);