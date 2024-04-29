import React from "react";

const MessageTable = ({ messages }) => {
  return (
    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-6 pr-10">
      <div className="align-middle inline-block shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-12 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                No
              </th>
              <th className="px-12 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                Name
              </th>
              <th className="px-12 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Email
              </th>
              <th className="px-12 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Subject
              </th>
              <th className="px-12 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Message
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {messages &&
              messages.map((message, index) => (
                <tr key={message._id}>
                  <td className="px-12 py-3 whitespace-no-wrap border-b border-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-12 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {message.name}
                  </td>
                  <td className="px-12 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {message.email}
                  </td>
                  <td className="px-12 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {message.subject}
                  </td>
                  <td className="px-12 py-3 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {message.message}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageTable;
