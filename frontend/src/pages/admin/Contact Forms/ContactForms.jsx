import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete, MdPreview } from "react-icons/md";
import MessageTable from "../../../components/MessageTable.jsx";
import "../../../styles/button.css";
import { useParams } from "react-router-dom";
import SerachBar from "../../../components/SerachBar.jsx";
import AdminNavBar from "../../../components/home/AdminNavBar.jsx";

const ContctForms = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  // Fetch data from your API endpoint
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/contact/get-messages`)
      .then((response) => {
        setMessages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen">
      <AdminNavBar />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-xl py-6 border-b">Registered User List</h1>
        <div className="flex flex-col items-center mb-8">
          <div className="flex justify-end w-full mb-4">
            <SerachBar />
          </div>
          <div className="reservation-list-container">
            <MessageTable messages={messages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContctForms;
