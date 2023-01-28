const fs = require("fs");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Cab = require("./../../models/cabTypesModel");

dotenv.config({ path: "./server/config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Db Connection Successful");
});

//Read Json File

const cabs = JSON.parse(
  fs.readFileSync(`${__dirname}/cab-types.json`, "utf-8")
);

// Import Data into DB

const importData = async () => {
  try {
    await Cab.create(cabs);
    console.log("Data Successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// Delete all data from DB

const deleteData = async () => {
  try {
    await Cab.deleteMany();
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
