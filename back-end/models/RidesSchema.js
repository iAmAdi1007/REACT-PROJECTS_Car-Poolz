var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RidesSchema = new Schema({
    rideId: Number,
    riderName: String,
    rideeName: String,
    pickUp: String,
    destination: String,
    status: String
});

const RidesList = mongoose.model("RidesList", RidesSchema);

module.exports=RidesList;
