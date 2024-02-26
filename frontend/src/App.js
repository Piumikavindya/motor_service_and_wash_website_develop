import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import LoginPage  from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/Reservation/HomePage';
import CreateReservation from './pages/Reservation/CreateReservation ';
import DeleteReservation from './pages/Reservation/DeleteReservation';
import AllReservations from './pages/Reservation/AllReservations';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/reservation/create" element={<CreateReservation />} />
        <Route path='/reservation/delete' element ={<DeleteReservation/>} />
        <Route path='/reservation/allreservations' element ={<AllReservations/>} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
