import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { accountId } = useParams();
  const [loading, setLoading] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      console.log("New password and confirm password do not match.");
      // You can also set an error state to display a message to the user if needed
      return;
    }

    setLoading(true); // Set loading state to true while waiting for the API request

    try {
      // Make an API call to change the password
      const response = await axios.post(
        `http://localhost:5555/user/change/${accountId}`,
        {
          currentPassword,
          newPassword,
        }
      );
      console.log("Password changed successfully:", response.data);
      // You can display a success message to the user if needed
    } catch (error) {
      console.error("Error changing password:", error.response.data);
      // You can display an error message to the user if needed
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <form onSubmit={handleSave} >
        <div >
      <h2 className="text-2xl font-bold mb-2">Change Password</h2>
      <div className="mb-4">
      <div> 
        <label htmlFor="oldPassword" className="block mb-1 font-medium">
          Current Password
        </label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your old password"
          required
        />
   
      
        <label htmlFor="newPassword" className="block mb-1 font-medium">
          New Password
        </label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your new password"
          required
        />
     
     
        <label htmlFor="confirmPassword" className="block mb-1 font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Confirm your password"
          required
        />
      </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        style={{
          marginTop: "1rem",
          backgroundColor: "#3B82F6", // Blue color
          color: "#FFFFFF", // White color
          borderRadius: "0.375rem", // 6px rounded corners
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s ease-in-out", // Smooth background color transition
        }}
      >
        {loading ? "Saving..." : "Save"}
      </button>
      </div>
    </form>
  );
};

export default ChangePassword;
