import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import PreviewDepartmentCom from "./PreviewDepartmentCom";
import AllReservations from "./AllReservations";

const PreviewDepartment = () => {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleOutsideClick = () => {
    setOpen(false);
    navigate("/allreservations");
  };

  return (
    <div>
      <AllReservations />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={() => handleOutsideClick()} // Use onClose to handle both closing and navigating
          static // Add the static prop here
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel>
                  <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
                    <div className="container mx-auto p-10">
                      <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                        <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                          Place Your Reservation
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          Streamline your vehicle care appointments with our
                          advanced online reservation system. No need to step
                          away from your desk – simply fill out our concise form
                          and click 'Send Request' to secure your next service
                          slot. Our team will swiftly follow up with a
                          confirmation call, ensuring your booking is swiftly
                          confirmed. Experience seamless scheduling without the
                          fuss.{" "}
                        </p>
                        <form>
                          <div className="mb-4">
                            <select
                              value={VehicleType}
                              onChange={(e) => setVehicleType(e.target.value)}
                              className="border p-2 rounded w-full"
                            >
                              <option value="">Select Vehicle Type</option>
                              <option>Car</option>
                              <option>Van</option>
                              <option>Bus</option>
                              <option>Lorry</option>
                              <option>Jeep</option>
                            </select>
                          </div>

                          <div className="mb-4">
                            <input
                              type="text"
                              value={VehicleNumber}
                              onChange={(e) => setVehicleNumber(e.target.value)}
                              placeholder="Vehicle Number"
                              className="border p-2 rounded w-full"
                            />
                          </div>

                          <div className="mb-4">
                            <select
                              value={Services}
                              onChange={(e) => setServices(e.target.value)}
                              className="border p-2 rounded w-full"
                            >
                              <option value="">Select Service</option>
                              <option>Interior Detailing</option>
                              <option>Exterior Detailing</option>
                              <option>Specialty Services</option>
                              <option>Full-Service Package</option>
                              <option>Additional Services</option>
                            </select>
                          </div>

                          <div className="mb-4">
                            <select
                              value={ServiceStation}
                              onChange={(e) =>
                                setServiceStation(e.target.value)
                              }
                              className="border p-2 rounded w-full"
                            >
                              <option value="">Select Service Station</option>
                              <option>Galle</option>
                              <option>Kandy</option>
                              <option>Colombo</option>
                            </select>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <input
                              type="date"
                              value={Date}
                              onChange={(e) => setDate(e.target.value)}
                              className="border p-2 rounded w-full"
                            />
                            <input
                              type="time"
                              value={Time}
                              onChange={(e) => setTime(e.target.value)}
                              className="border p-2 rounded w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="text"
                              value={Comments}
                              onChange={(e) => setComments(e.target.value)}
                              placeholder="Add any comments"
                              className="border p-2 rounded w-full"
                            />
                          </div>
                          <button
                            type="button"
                            id="theme-toggle"
                            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors"
                            onClick={handleSaveUserReservation}
                          >
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default PreviewDepartment;
