const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: [true, "A Request must have a Password"],
  },
});

const UsersData = mongoose.model("UsersData", userDataSchema);

module.exports = UsersData;
