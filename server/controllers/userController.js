const UsersData = require("./../models/usersDataModel");

exports.createUser = async (req, res) => {
  console.log(req.body);
  try {
    const newReq = await UsersData.create(req.body);

    res.status(201).json({
      status: "Successful",
      data: {
        newUser: newReq,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
