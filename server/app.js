const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

// import Router from Modules

const cabsRouter = require("./routes/cabRoutes");
const reqRouter = require("./routes/reqRoutes");
const userRouter = require("./routes/userRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const UsersData = require("./models/usersDataModel");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Using Middleware between request and response

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the Middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.post("/api/v1/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userData = await UsersData.findOne({ email });

    if (userData && userData.password === password) {
      res.status(201).send(userData);
      console.log(userData);
    } else {
      throw new Error("Data not Matched");
    }
  } catch (err) {
    res.status(400).send("Invalid Login Credientials");
  }
});

app.use("/api/v1/cabs", cabsRouter);
app.use("/api/v1/new-req", reqRouter);
app.use("/api/v1/new-user", userRouter);
app.use("/api/v1/reviews", reviewRouter);

module.exports = app;
