import { Fragment, useRef, useState } from "react";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AllReservations from "./AllReservations";

const DeleteReservation = () => {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { accountId } = useParams();
  const handleDeleteReservation = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/reservation/delete/${accountId}/${id}`)
      .then(() => {
        setLoading(false);
        alert("Reservation is deleted successfully");
        navigate(`/reservation/${accountId}`);
      })
      .catch((error) => {
        setLoading(false);
        alert("Error deleting reservation");

        console.log(error);
      });
  };

  const handleOutsideClick = () => {
    setOpen(false);
    navigate(`/reservation/${accountId}`);
  };
  return (
    <div>
      <AllReservations />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto "
          onClose={() => handleOutsideClick()}
          initialFocus={cancelButtonRef}
        >
          <div className="flex items-center justify-center min-h-screen px-4 py-12 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="mt-5 inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                    <div className="mt-3 text-left sm:mt-0 sm:ml-4">
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <DialogHeader className="grid place-items-center">
                          <Typography
                            variant="h5"
                            color="red"
                            className="text-center"
                          >
                            <h4>Delete Reservation</h4>
                          </Typography>
                        </DialogHeader>
                        <DialogBody divider className="grid place-items-center">
                          <img
                            src="https://www.bitdefender.com/images/Knowledge%20Base%20SMB/admonitions/important.png"
                            alt=""
                            className="max-w-24 h-24  md:max-w-md lg:max-w-24 md:h-24 w-24"
                          ></img>

                          <Typography className="text-center font-normal">
                            <h3>
                              Are you sure want to delete this reservation?
                            </h3>
                          </Typography>

                          <Typography
                            className="text-center font-normal"
                            color="red"
                          >
                            <h6>
                              Note: Once you delete the reservation, it cannot
                              be undo!!!
                            </h6>
                          </Typography>
                        </DialogBody>
                        <DialogFooter className="space-x-6">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleDeleteReservation}
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              borderRadius: "0",
                              padding: "6px 12px", // Adjust padding
                              fontSize: "0.875rem", // Adjust font size
                              lineHeight: "1.5", // Adjust line height
                              height: "auto", // Adjust height
                            }}
                          >
                            Delete
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleOutsideClick}
                            style={{
                              backgroundColor: "blue",
                              color: "white",
                              borderRadius: "0",
                              padding: "6px 12px", // Adjust padding
                              fontSize: "0.875rem", // Adjust font size
                              lineHeight: "1.5", // Adjust line height
                              height: "auto", // Adjust height
                            }}
                          >
                           Cancel
                          </button>
                         
                        </DialogFooter>
                      </Dialog.Panel>
                    </div>
                 
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
export default DeleteReservation;
