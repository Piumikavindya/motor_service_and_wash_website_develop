import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/Reservation/HomePage";
import CreateReservation from "./pages/Reservation/CreateReservation ";
import DeleteReservation from "./pages/Reservation/DeleteReservation";
import AllReservations from "./pages/Reservation/AllReservations";
import PreviewReservation from "./pages/Reservation/PreviewReservation";
import UpadteReservation from "./pages/Reservation/UpdateReservation";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { customer } = useAuthContext();
  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={<Home /> }
         />
        <Route path="/login" element={!customer ? <LoginPage /> :<Navigate to = "/"/>} />

        <Route path="/signup" element={!customer ? <SignUpPage /> :<Navigate to = "/"/>} />
        <Route path="/reservation/create" element={<CreateReservation />} />
        <Route path="/reservation/delete/:id" element={<DeleteReservation />} />
        <Route
          path="/reservation/preview/:id"
          element={<PreviewReservation />}
        />
        <Route path="/reservation/update/:id" element={<UpadteReservation />} />
        <Route
          path="/reservation/allreservations"
          element={<AllReservations />}
        />
      </Routes>
    </Router>
  );
}

export default App;
