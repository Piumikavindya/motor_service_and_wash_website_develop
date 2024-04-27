import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/Reservation/UserHome/HomePage";
import CreateReservation from "./pages/Reservation/CreateReservation ";
import Service from "./pages/Service";
import About from "./pages/About";
import Network from "./pages/Network";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";

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
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={
            !user ? (
              <SignUpPage />
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
      </Routes>
    </Router>
  );
}

export default App;
