const NewUserRequest = require("./../models/newUserReq");

exports.createRequest = async (req, res) => {
  console.log(req.body);
  try {
    const newReq = await NewUserRequest.create(req.body);

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
