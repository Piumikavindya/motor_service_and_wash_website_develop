import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete, MdPreview } from "react-icons/md";

const ReservationTable = ({ reservations }) => {
  const getStatusColor = (Status) => {
    switch (Status) {
      case "Pending":
        return "bg-yellow-300 text-yellow-800";
      case "Approved":
        return "bg-green-400 text-green-800";
      case "Rejected":
        return "bg-red-400 text-red-800";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-6 pr-10">
      <div className="align-middle inline-block shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                ID
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Vehicle Type
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Vehicle Number
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Services
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Service Station
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Time
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Comments
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Operations
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {reservations &&
              reservations.map((reservation, index) => (
                <tr key={reservation._id}>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {reservation.VehicleType}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {reservation.VehicleNumber}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {reservation.Services}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {reservation.ServiceStation}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {reservation.Date}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {reservation.Time}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {reservation.Comments}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    {reservation.Status === "Pending" && (
                      <div className="icon-link flex justify-center gap-x-4">
                        <Link
                          to={`/reservation/preview/${reservation.accountId}/${reservation._id}`}
                        >
                          <MdPreview className="text-2xl text-green-600" />
                        </Link>
                        <Link
                          to={`/reservation/update/${reservation.accountId}/${reservation._id}`}
                        >
                          <AiOutlineEdit className="text-2xl text-blue-800 " />
                        </Link>
                        <Link
                          to={`/reservation/delete/${reservation.accountId}/${reservation._id}`}
                        >
                          <MdOutlineDelete className="text-2xl text-red-500" />
                        </Link>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <button
                      className={` py-1 px-2 rounded ${getStatusColor(
                        reservation.Status
                      )}  text-sm`}
                    >
                      {reservation.Status}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationTable;
