const Cab = require("./../models/cabTypesModel");

exports.getAllCabs = async (req, res) => {
  try {
    const cabs = await Cab.find();

    res.status(200).json({
      status: "Success",
      RequestedTime: req.requestTime,
      results: cabs.length,
      data: {
        cabs,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
