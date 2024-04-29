import React, { useState } from "react";
import { useLogout } from "../../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Nav from "../../../components/UserNavBar";
import UserFooter from "../../../components/UserFooter";
import Tab from "../../../components/Tab";

export default function UserProfile() {
  const [message, setMessage] = useState("");
 
  const { user } = useAuthContext();
  
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <div>
      {/* Header Area wrapper Start */}
      <header id="header-wrap" className="relative">
        <Nav />
      </header>

      {/* Header Area wrapper End */}

      {/*   Services Section Start*/}
      <Tab/>
      <UserFooter />
    </div>
  );
}
