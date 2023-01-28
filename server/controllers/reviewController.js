const userReview = require("./../models/userReviewsModel");

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await userReview.find();

    res.status(200).json({
      status: "Success",
      RequestedTime: req.requestTime,
      results: reviews.length,
      data: {
        reviews,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
