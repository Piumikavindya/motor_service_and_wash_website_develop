const mongoose = require('mongoose');
const Reservation = require("../models/reservation");
const reservation = require("../models/reservation");

exports.create = async (req, res) => {
  const accountId = req.params.accountId;
  const {
      VehicleType,
      VehicleNumber,
      Services,
      ServiceStation,
      Date,
      Time,
      Comments,
  } = req.body;

  try {
      // Create a new reservation
      const newReservation = new Reservation({
          accountId,
          VehicleType,
          VehicleNumber,
          Services,
          ServiceStation,
          Date,
          Time,
          Comments,
      });

      // Save the reservation
      const createdReservation = await newReservation.save();

      res.json(createdReservation);
  } catch (error) {
      console.error("Error in createReservation:", error);
      res.status(500).json({ error: error.message });
  }
};
exports.viewReservations = async (req, res) => {
  const accountId = req.params.accountId;

  try {
    // Find reservations based on the account ID
    const reservations = await Reservation.find({ accountId });

    res.json(reservations);
  } catch (error) {
    console.error("Error in viewReservations:", error);
    // Handle errors and send an appropriate response
    res.status(500).json({ error: error.message });
  }
};

exports.viewAllReservations = async (req, res) => {
  const id = req.params.id;

  try {
    // Find reservations based on the account ID
    const reservations = await Reservation.find({ id});

    res.json(reservations);
  } catch (error) {
    console.error("Error in viewReservations:", error);
    // Handle errors and send an appropriate response
    res.status(500).json({ error: error.message });
  }
};
exports.previewOneReservation = async (req, res) => {
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

  try {
    await reservation.findByIdAndDelete(reservationId);
    res.status(200).send({ status: "Reservation is deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "Error with delete reservation", error: err.message });
  }
};


















