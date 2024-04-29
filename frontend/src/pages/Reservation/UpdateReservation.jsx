import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import "../../styles/button2.css";
import Nav from "../../components/UserNavBar.jsx";

const UpdateReservations = () => {
  const [VehicleType, setVehicleType] = useState("");
  const [VehicleNumber, setVehicleNumber] = useState("");
  const [Services, setServices] = useState("");
  const [ServiceStation, setServiceStation] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [Comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false); // New state for showing alert
 const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { accountId } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/reservation/preview-reservation/${accountId}/${id}`)
      .then((response) => {
        const reservationData = response.data;
        console.log("Fetched reservation data:", reservationData);

        setServiceStation(reservationData.ServiceStation);
        setVehicleNumber(reservationData.VehicleNumber);
        setVehicleType(reservationData.VehicleType);
        setServices(reservationData.Services);
        setComments(reservationData.Comments);
        setDate(reservationData.Date);
        setTime(reservationData.Time);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error fetching reservation data", {
          variant: "error",
        });
        console.log(error);
      });
  }, [id]);

  function handleUpdateReservations(e) {
    e.preventDefault();

    const updateReservation = {
      VehicleType,
      VehicleNumber,
      Services,
      ServiceStation,
      Date,
      Time,
      Comments,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/reservation/update/${accountId}/${id}`, updateReservation)
      .then(() => {
        enqueueSnackbar("Reservation updated successfully", {
          variant: "success",
        });
        setLoading(false);
        setShowAlert(true); // Show alert on successful creation

        setServiceStation("");
        setVehicleNumber("");
        setVehicleType("");
        setServices("");
        setComments("");
        setDate("");
        setTime("");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error updating reservation", { variant: "error" });
        console.log(error);
      });
  }

  return (
    <div className="app-container p-8 rounded border border-gray-200 bg-blue-100">
      <Nav />
      <div className="bg-blue-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto p-24">
          <div className="flex justify-center items-center h-screen">
            <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6 w-1/2">
              <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Change Your Reservation
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Streamline your vehicle care appointments with our advanced
                online reservation system. No need to step away from your desk –
                simply fill out our concise form and click 'Send Request' to
                secure your next service slot. Our team will swiftly follow up
                with a confirmation call, ensuring your booking is swiftly
                confirmed. Experience seamless scheduling without the fuss.{" "}
              </p>
              {showAlert && (
                <div className="bg-green-200 text-green-700 p-4 mb-4 rounded">
                  Reservation updated successfully!
                </div>
              )}
              <form onSubmit={handleUpdateReservations}>
                <div className="mb-4">
                  <select
                    value={VehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="border p-2 rounded w-full"
                  >
                    <option value="">Select Vehicle Type</option>
                    <option>Car</option>
                    <option>Van</option>
                    <option>Bus</option>
                    <option>Lorry</option>
                    <option>Jeep</option>
                  </select>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    value={VehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    placeholder="Vehicle Number"
                    className="border p-2 rounded w-full"
                  />
                </div>

                <div className="mb-4">
                  <select
                    value={Services}
                    onChange={(e) => setServices(e.target.value)}
                    className="border p-2 rounded w-full"
                  >
                    <option value="">Select Service</option>
                    <option>Interior Detailing</option>
                    <option>Exterior Detailing</option>
                    <option>Specialty Services</option>
                    <option>Full-Service Package</option>
                    <option>Additional Services</option>
                  </select>
                </div>

                <div className="mb-4">
                  <select
                    value={ServiceStation}
                    onChange={(e) => setServiceStation(e.target.value)}
                    className="border p-2 rounded w-full"
                  >
                    <option value="">Select Service Station</option>
                    <option>Galle</option>
                    <option>Kandy</option>
                    <option>Colombo</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <input
                    type="date"
                    value={Date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="time"
                    value={Time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={Comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Add any comments"
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <button type="submit" class="btn btn-primary">
                    Save
                  </button>
                  <span style={{ margin: "0 10px" }}></span>
                  <button
                    onClick={() => navigate(`/reservation/${accountId}`)}
                    class="btn btn-primary"
                  >
                    Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReservations;
