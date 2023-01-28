const express = require("express");
const cabController = require("./../controllers/cabController");

const router = express.Router();

router.route("/").get(cabController.getAllCabs);
module.exports = router;
