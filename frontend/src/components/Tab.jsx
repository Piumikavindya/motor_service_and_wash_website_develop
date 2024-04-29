import React, { useState } from "react";
import ChangeAccountDetails from "../pages/User/Profile/ChangeAccountDetails";
import ChangePassword from "../pages/User/Profile/ChangePassword";
import DeleteAccount from "../pages/User/Profile/DeleteAccount";

const Tab = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="bg-blue-100 font-sans flex h-screen items-center justify-center">
    <div className="p-8">
      <div className="max-w-md mx-auto">
        <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
          <button onClick={() => setOpenTab(1)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 1 ? 'bg-blue-600 text-white' : ''}`}>Change Account</button>
          <button onClick={() => setOpenTab(2)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 2 ? 'bg-blue-600 text-white' : ''}`}>Change Password</button>
          <button onClick={() => setOpenTab(3)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 3 ? 'bg-blue-600 text-white' : ''}`}>Delete Account</button>

        </div>
         
          <div
            style={{ display: openTab === 1 ? "block" : "none" }}
            className="transition-all duration-300 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
          >
            <ChangeAccountDetails />
          </div>
          <div
            style={{ display: openTab === 2 ? "block" : "none" }}
            className="transition-all duration-300 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
          >
            <ChangePassword />
          </div>
          <div
            style={{ display: openTab === 3 ? "block" : "none" }}
            className="transition-all duration-300 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
          >
            <DeleteAccount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
