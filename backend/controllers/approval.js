const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const ErrorHandler = require("../middlewares/errornew.js");
const reservation = require('../models/reservation.js');

module.exports = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedReservation = await reservation.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    if (!updatedReservation) {
      return next(new ErrorHandler("Request not found!", 404));
    }

    res.status(200).json({
      success: true,
      message: "Reservation Status is Updated!",
      data: updatedReservation,
    });
  } catch (error) {
    // Forwarding error to error handling middleware
    return next(error);
  }
});
















