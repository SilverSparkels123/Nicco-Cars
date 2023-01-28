const mongoose = require("mongoose");

const userReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, "A Review must have a Rating Stars"],
  },
  title: {
    type: String,
    required: [true, "A Review must have a Title"],
    // unique: true,
  },
  comment: {
    type: String,
    required: [true, "A review must have a comment"],
    // unique: true,
  },
  name: {
    type: String,
    required: [true, "A Review must have a User Name"],
  },
});

const UserReview = mongoose.model("UsersReview", userReviewSchema);

module.exports = UserReview;
