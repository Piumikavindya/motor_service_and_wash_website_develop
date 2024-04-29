const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    accountId: {
        type: String,
        required: true, 
    },
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
    Status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
      },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Reservation', reservationSchema);