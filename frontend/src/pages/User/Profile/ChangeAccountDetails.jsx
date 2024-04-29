import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const ChangeAccountDetails = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const { accountId } = useParams(); // Using accountId instead of id

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    const newUser = {
      firstname,
      lastname,
      email,
    };

    setLoading(true);
    try {
      await axios.put(
        `http://localhost:5555/user/update/${accountId}`,
        newUser
      ); // Updated URL with accountId
      alert("User Updated");
      // Clear the form
      setEmail("");
      setLastName("");
      setFirstName("");
    } catch (error) {
      alert("Error updating user");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpdateUser}>
      <div >
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        <div className="mb-4">

          <div>
            <label htmlFor="first_name" className="block mb-1 font-medium">
              First Name
            </label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your first name"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-1 font-medium">
              Last Name
            </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your last name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your email"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          style={{
            marginTop: "1rem",
            width: "100%",
            padding: "0.5rem 1rem",
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

export default ChangeAccountDetails;
