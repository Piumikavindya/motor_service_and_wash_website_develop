const Reservation = require("../models/reservation");
const reservation = require("../models/reservation");

// request from the frontend

exports.create = async (req, res) => {
  const {
    VehicleType,
    VehicleNumber,
    Services,
    ServiceStation,
    Date,
    Time,
    Comments,
  } = req.body;
  // response will send to frontend
  const newReservation = new Reservation({
    VehicleType,
    VehicleNumber,
    Services,
    ServiceStation,
    Date,
    Time,
    Comments,
  });
  //save the data in the database
  try {
    console.log("New Reservation:", newReservation);
    await newReservation.save();

    res.json({ reservation: newReservation });
  } catch (error) {
    console.error("Error saving reservation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get the all the users
exports.viewReservations = async (req, res) => {
  Reservation.find()
    .then((Reservations) => {
      res.json(Reservations);
    })
    .catch((err) => {
      console.log(err);
    });
};

// view details of perticular user
exports.previewReservation = async (req, res) => {
  const reservationId = req.params.id;

  try {
    const reservation = await Reservation.findById(reservationId);
    if (!reservation) {
      return res.status(404).json({ status: "user not found" });
    }

    res.status(200).json(reservation);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ status: "Error with getting reservation", error: err.message });
  }
};

//update user details
exports.updateReservation = async (req, res) => {
  let reservationId = req.params.id;

  const {
    VehicleType,
    VehicleNumber,
    Services,
    ServiceStation,
    Date,
    Time,
    Comments,
  } = req.body;

  const updateReservation = {
    VehicleType,
    VehicleNumber,
    Services,
    ServiceStation,
    Date,
    Time,
    Comments,
  };

  try {
    const updatedReservation = await reservation.findByIdAndUpdate(
      reservationId,
      updateReservation,
      { new: true }
    );
    res
      .status(200)
      .json({ status: "Reservation is updated", reservation: updatedReservation });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ status: "Error with updating Reservation", error: err.message });
  }
};

//delete reservation
exports.deleterReservation = async (req, res) => {
  let reservationId = req.params.id;

  await reservation.findByIdAndDelete(reservationId).then(() => {
    res
      .status(200)
      .send({ status: "Reservation is deleted" })
      .catch((err) => {
        res.status(500).send({ status: "Error with delete reservation" });
      });
  });
};
