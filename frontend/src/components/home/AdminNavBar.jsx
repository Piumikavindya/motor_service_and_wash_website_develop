import React from "react";
import { useLogout } from "../../hooks/useLogout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function AdminNavBarCom() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const { accountId } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <div
        className="navigation fixed top-0 left-0 w-full z-30 duration-300 bg-white"
        style={{ height: "80px" }}
      >
        <div className="container">
          <nav className="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300">
            <a className="navbar-brand" href="index.html">
              <img
                src="../assets/img/new.png"
                alt="Logo"
                width="100"
                height="50"
              />
            </a>
            <button
              className="navbar-toggler focus:outline-none block lg:hidden"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
                <li className="nav-item">
                  <a
                    className="page-scroll active text-white font-bold"
                    href="/adminhome"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="page-scroll text-white font-bold"
                    href="/user/preview-users"
                  >
                    Manage User
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="page-scroll text-white font-bold"
                    href="/reservation/view-reservations"
                  >
                    Manage Reservation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="page-scroll text-white font-bold"
                    href="/ContactForms"
                  >
                    Contact Forms
                  </a>
                </li>
              </ul>
            </div>
            {user && (
              <div>
                <span className="ml-3">{user.accountId}</span>
                <button
                  onClick={handleClick}
                  className="ml-3 text-white bg-blue-600 border border-blue-600 px-6 py-2 rounded-md duration-300 hover:bg-blue-300 hover:text-white"
                >
                  Log out
                </button>
              </div>
            )}
            {!user && (
              <div className="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                <button className="ml-3 text-white bg-blue-600 border border-blue-600 px-6 py-2 rounded-md duration-300 hover:bg-blue-300 hover:text-white">
                  <Link to="login">login</Link>
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
