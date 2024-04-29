import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteAccount = () => {
  const [loading, setLoading] = useState(false);
  const { id, accountId } = useParams();
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      setLoading(true);
      // Make API request to delete account
      await axios.delete(`http://localhost:5555/user/delete/${accountId}`);
      setLoading(false);
      alert("Account is deleted successfully");
      navigate(`/home/${accountId}`);
    } catch (error) {
      console.error("Error deleting account:", error);
      setLoading(false);
      alert("Error deleting account");
     
    }
  };

  const handleCancel = () => {
    navigate(`/home/${accountId}`);
  };

  return (
    <div>
      <div className="w-full max-w-screen-md mx-auto px-4 py-4 bg-green-500 text-white rounded-lg relative">
        <div className="absolute top-4 left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-6 w-6 mt-px"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="ml-8 mr-12">
          <h5 className="block text-xl font-semibold leading-snug tracking-normal">
            Are you sure you want to delete your account?
          </h5>
          <p className="mt-2 block text-base font-normal leading-relaxed">
            This action cannot be undone. All your data will be permanently
            deleted.
          </p>

          <button
            onClick={handleDeleteAccount}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md ml-2" // Added ml-2 for left margin
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
