const express = require("express");
const reqController = require("./../controllers/reqController");

const router = express.Router();
console.log(reqController.createRequest);

router.route("/").post(reqController.createRequest);
module.exports = router;
