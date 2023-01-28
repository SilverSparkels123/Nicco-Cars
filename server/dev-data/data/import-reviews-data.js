const fs = require("fs");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userReview = require("./../../models/userReviewsModel");

dotenv.config({ path: "./server/config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Db Connection Successful");
});

//Read Json File

const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, "utf-8")
);

// Import Data into DB

const importData = async () => {
  try {
    await userReview.create(reviews);
    console.log("Data Successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// Delete all data from DB

const deleteData = async () => {
  try {
    await userReview.deleteMany();
    console.log("Data Succesfully deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
