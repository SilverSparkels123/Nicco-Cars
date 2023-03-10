const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Db Connection Successful");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is Runningon Port : ${port}`);
});
