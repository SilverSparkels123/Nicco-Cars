const mongoose = require("mongoose");

const cabSchema = new mongoose.Schema({
  cabType: {
    type: String,
    required: [true, "A Cab must have a Type"],
  },
  price: {
    type: Number,
    required: [true, "A Cab must have a price"],
  },
  vehicleType: {
    type: String,
    required: [true, "A cab must have a Vehicle Type"],
  },
  doors: {
    type: Number,
    required: [true, "A Cab must have Number of Doors"],
  },
  seats: {
    type: Number,
    required: [true, "A Cab must have Number of Seats"],
  },
  transmission: {
    type: String,
    default: "Automatic",
  },
  moreDetails: {
    category: {
      type: String,
    },
    rate: Number,
    extraKmCharge: Number,
    extraHourCharge: Number,
    extraCharges: Number,
    ratePerKm: Number,
    minimumJourney: Number,
    driverTA: Number,
  },
});

const Cab = mongoose.model("Cab", cabSchema);

module.exports = Cab;
