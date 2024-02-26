const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt =require("bcrypt");

const reservationSchema = new Schema({
    VehicleType: { 
        type: String,
        required: true,
    },
    VehicleNumber: { 
        type: String,
        required: true,
    },
    Services: { 
        type: String,
        required: true,
    },
    ServiceStation: { 
        type: String,
        required: true,
    },
    Date: { 
        type: mongoose.Schema.Types.Mixed, 
        required: true,
    },
    Time: { 
        type: mongoose.Schema.Types.Mixed,
        required: true,
    }, 
    Comments: { 
        type: String,
        required: true,
    },
    },
    {
        timestamps: true,
    }
    );


module.exports = mongoose.model('Reservation', reservationSchema);