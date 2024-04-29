import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete, MdPreview } from "react-icons/md";

const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-6 pr-10">
      <div className="align-middle inline-block shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-12 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                ID
              </th>
              <th className="px-12 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Account Number
              </th>
              <th className="px-12 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                First Name
              </th>
              <th className="px-12 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Last Name
              </th>
              <th className="px-12 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users &&
              users.map((user, index) => (
                <tr key={user._id}>
                  <td className="px-12 py-3 whitespace-no-wrap border-b border-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-12 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {user.accountId}
                  </td>
                  <td className="px-12 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {user.firstname}
                  </td>
                  <td className="px-12 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {user.lastname}
                  </td>
                  <td className="px-12 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {user.email}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
