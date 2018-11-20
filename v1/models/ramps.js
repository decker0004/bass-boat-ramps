var mongoose = require("mongoose");

var rampsSchema = new mongoose.Schema({
   name: { type: String},
   image: { type: String},
   numRamps: { type: Number},
   rampFee: { type: Number},
   url: {type: String}
});

module.exports = mongoose.model("Ramp", rampsSchema);