import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from "./pages/User/Home";
import LoginPage from "./pages/User/LoginPage";
import SignUpPage from "./pages/User/SignUpPage";
import HomePage from "./pages/Reservation/UserHome/HomePage";
import CreateReservation from "./pages/Reservation/CreateReservation ";
import Service from "./pages/User/Service";
import About from "./pages/User/About";
import Network from "./pages/User/Network";
import Offers from "./pages/User/Offers";
import Contact from "./pages/User/Contact";
import { AuthContextProvider } from "./context/Authcontext";

import ServiceUser from "./pages/Reservation/UserHome/ServiceUser";
import AboutUser from "./pages/Reservation/UserHome/AboutUser";
import NetworkUser from "./pages/Reservation/UserHome/NetworkUser";
import OffersUser from "./pages/Reservation/UserHome/OffersUser";
import ContactUser from "./pages/Reservation/UserHome/ContactUser";

import DeleteReservation from "./pages/Reservation/DeleteReservation";
import AllReservations from "./pages/Reservation/AllReservations";
import PreviewReservation from "./pages/Reservation/PreviewReservation";
import UpadteReservation from "./pages/Reservation/UpdateReservation";
import { useAuthContext } from "./hooks/useAuthContext";
import ManageUsers from "./pages/admin/ManageUser/ManageUser";
import AdminHome from "./pages/admin/AdminHome";
import ManageReservations from "./pages/admin/ManageResrvations/ManageReservations";
import ApprovalForm from "./pages/admin/ManageResrvations/ApprovalForm";
import ContactForms from "./pages/admin/Contact Forms/ContactForms";
import ForgetPasswordPage from "./pages/User/Profile/ForgetPassword";
import ResetPasswordPage from "./pages/User/Profile/ResetPassword";
import ChangeAccountDetails from "./pages/User/Profile/ChangeAccountDetails";
import ChangePassword from "./pages/User/Profile/ChangePassword";
import UserProfile from "./pages/User/Profile/UserProfile";

function App() {
  const { user } = useAuthContext();
  const [accountId, setAccountId] = useState(null);

  useEffect(() => {
    // Here you can make an asynchronous call to fetch accountId from the database
    // For example:
    // fetchAccountId().then((accountId) => setAccountId(accountId));
  }, []); // Make sure to pass an empty dependency array to useEffect to run only once

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            !user ? (
              <LoginPage />
            ) : user.email === "admin@gmail.com" ? (
              <Navigate to="/adminhome" />
            ) : (
              <Navigate to={`/home/${user.accountId}`} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !user ? (
              <SignUpPage />
            ) : user.email === "admin@gmail.com" ? (
              <Navigate to="/adminhome" />
            ) : (
              <Navigate to={`/home/${user.accountId}`} />
            )
          }
        />
        
        <Route path="/home/:accountId" element={<HomePage />} />
        <Route
          path="/reservation/create/:accountId"
          element={<CreateReservation />}
        />
        <Route path="/reservation/:accountId" element={<AllReservations />} />
        <Route
          path="/reservation/preview/:accountId/:id"
          element={<PreviewReservation />}
        />
        <Route
          path="/reservation/update/:accountId/:id"
          element={<UpadteReservation />}
        />
        <Route
          path="/reservation/delete/:accountId/:id"
          element={<DeleteReservation />}
        />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/network" element={<Network />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:accountId" element={<ServiceUser />} />
        <Route path="/about/:accountId" element={<AboutUser />} />
        <Route path="/network/:accountId" element={<NetworkUser />} />
        <Route path="/offers/:accountId" element={<OffersUser />} />
        <Route path="/contact/:accountId" element={<ContactUser />} />

        <Route path="/user/preview-users" element={<ManageUsers />} />
        <Route path="/reservation/view-reservations" element={<ManageReservations />} />
        <Route path="/ApprovalForm/:id" element={<ApprovalForm />} />
        <Route path="/ContactForms" element={<ContactForms/>} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="/reset-password/:resetToken" element={<ResetPasswordPage />} />
        <Route path="/changeaccountdetails" element={<ChangeAccountDetails />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/userprofile/:accountId" element={<UserProfile />} />

      </Routes>
      
    </Router>
  );
}

export default App;
