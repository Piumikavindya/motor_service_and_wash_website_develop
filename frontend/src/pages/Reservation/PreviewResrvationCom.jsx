import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../styles/button2.css";

export default function PreviewReservation() {
  const [reservation, setReservation] = useState({});
  const { id } = useParams();
  const { accountId } = useParams(); 

  useEffect(() => {
    const getReservation = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5555/reservation/preview-reservation/${accountId}/${id}`
        );
        console.log("Reservation Data:", response.data);
        setReservation(response.data);
      } catch (error) {
        console.log("Error fetching reservation:", error);
      }
    };

    getReservation();
  }, [id]);

  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`/reservation/${accountId}`);
  };

  return (
    <div className="App">
      <section id="content">
        <main>
          <div className="p-4">
            <div className="min-h-screen flex items-center justify-center px-4">
              <div
                className="max-w-2xl mx-auto bg-white w-full rounded-lg shadow-xl p-8"
                style={{ border: "4px solid #3490dc" }}
              >
                <div className="p-2 border-b">
                  <h1 className="font-medium text-2xl">Reservation Details</h1>
                  <p className="text-sm text-gray-500">
                    Reservation details of users.
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-2 hover:bg-gray-50 space-y-1 p-2 border-b">
                  <span className="text-sm md:mr-4 text-black-900 font-bold block sm:inline">
                      Vehicle Type
                    </span>
                    <span className="text-sm text-gray-600">
                      {reservation.VehicleType}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 hover:bg-gray-50 space-y-1 p-2 border-b bg-gray-50">
                  <span className="text-sm md:mr-4 text-black-900 font-bold block sm:inline">
                      Vehicle Number
                    </span>
                    <span className="text-sm text-gray-600">
                      {reservation.VehicleNumber}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 hover:bg-gray-50 space-y-1 p-2 border-b">
                  <span className="text-sm md:mr-4 text-black-900 font-bold block sm:inline">
                      Services
                    </span>
                    <span className="text-sm text-gray-600">
                      {reservation.Services}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 hover:bg-gray-50 space-y-1 p-2 border-b bg-gray-50">
                  <span className="text-sm md:mr-4 text-black-900 font-bold block sm:inline">
                      Service Station
                    </span>
                    <span className="text-sm text-gray-600">
                      {reservation.ServiceStation}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 hover:bg-gray-50 space-y-1 p-2 border-b">
                  <span className="text-sm md:mr-4 text-black-900 font-bold block sm:inline">
                      Date
                    </span>
                    <span className="text-sm text-gray-600">
                      {reservation.Date}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 hover:bg-gray-50 space-y-1 p-2 border-b bg-gray-50">
                  <span className="text-sm md:mr-4 text-black-900 font-bold block sm:inline">
                      Time
                    </span>
                    <span className="text-sm text-gray-600">
                      {reservation.Time}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 hover:bg-gray-50 space-y-1 p-2 border-b">
                    <span className="text-sm md:mr-4 text-black-900 font-bold block sm:inline">
                      Comments:
                    </span>
                    <span className="text-sm text-gray-600">
                      {reservation.Comments}
                    </span>
                  </div>
                  <div className="space-x-4 mt-8 text-center mt-2">
                    <button onClick={handleClose} className="button-71">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
