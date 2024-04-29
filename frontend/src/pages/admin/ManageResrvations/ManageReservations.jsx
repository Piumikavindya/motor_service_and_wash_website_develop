import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete, MdPreview } from "react-icons/md";
import "../../../styles/button.css";
import { useParams } from "react-router-dom";
import SerachBar from "../../../components/SerachBar.jsx";
import AdminNavBar from "../../../components/home/AdminNavBar.jsx";
import AllReservationTable from "../../../components/AllResrvationTable.jsx";

const ManageReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const { accountId } = useParams();

  // Fetch users data from your API endpoint
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/reservation/view-reservations`) // Update the API endpoint
      .then((response) => {
        setReservations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reservations:", error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="bg-blue-100 min-h-screen">
      <AdminNavBar />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-xl py-6 border-b">Registered Reservation List</h1>
        <div className="flex justify-between items-center mb-8">
        
          <SerachBar />
        </div>
        <div className="reservation-list-container">
          <AllReservationTable reservations={reservations} />
        </div>
      </div>
    </div>
  );
};

export default ManageReservations;
