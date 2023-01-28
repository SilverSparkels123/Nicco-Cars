const mongoose = require("mongoose");

const newDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A request must have a name"],
  },
  mobNumber: {
    type: Number,
    required: [true, "A request must have a mobile number"],
    // unique: true,
  },
  email: {
    type: String,
    required: [true, "A request must have a email address"],
    // unique: true,
  },
  pickUpLocation: {
    type: String,
    required: [true, "A Request must have a Location"],
  },
  carType: {
    type: String,
    required: [true, "A request must have car Type"],
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
});

const NewUserRequest = mongoose.model("NewUserRequest", newDataSchema);

module.exports = NewUserRequest;
