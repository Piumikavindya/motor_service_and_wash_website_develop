import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete, MdPreview } from "react-icons/md";
import ReservationTable from "../../components/ReservationTable";
import "../../styles/button.css";
import Breadcrumb from "../../components/Breadcrumb.jsx";
import { useParams } from "react-router-dom";

const AllReservations = () => {
  const [reservations, SetReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

    // Fetch users data from your API endpoint
    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:5555/reservation/view-reservations`) // Update the API endpoint
        .then((response) => {
          SetReservations(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching reservations:", error);
          setLoading(false);
        });
    }, []);
  
  return (
    <div className="p-4">
      <Breadcrumb
     crumbs={[
       { label: "Home", link: "/" },
       { label: "User Reservation List", link: "/reservation/allreservations" },
     ]}
     selected={(crumb) => console.log(`Selected: ${crumb.label}`)}
   />
  <div className="container mx-auto py-6 px-4 flex items-center justify-between">
        <h1 class="text-3xl py-4 border-b mb-10">Registered Reservation List</h1>

        <div class="flex items-center">
          <button onclick="popuphandler(true)" class="button">
            <Link to={"/reservation/create"} class="text-white">
              Add Resrvation
            </Link>
          </button>
        </div>
      </div>
      
      
      <div className="reservation-list-container">
      <ReservationTable reservations={reservations} />

      </div>
    
    </div>
  );
};

export default AllReservations;
