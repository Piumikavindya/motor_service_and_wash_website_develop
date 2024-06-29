import React, { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import "../../styles/animation.css";
export default function Home() {
  const [message, setMessage] = useState("");
  const [accountId, setAccountId] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const { user } = useAuthContext();
  const handleSendMessage = () => {
    // Here, you can implement the logic to send the message, such as making an API request.
    // You can use the 'message' state to get the message content.
    alert("Message sent: " + message);
  };
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <div>
      {/* Header Area wrapper Start */}
      <header id="header-wrap" className="relative">
        {/* Navbar Start */}
        <div
          className="navigation fixed top-0 left-0 w-full z-30 duration-300 bg-white"
          style={{ height: "80px" }}
        >
          <div className="container">
            <nav className="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300">
              <a className="navbar-brand" href="index.html">
                <img
                  src="assets/img/new.png"
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
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="/service"
                    >
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="/network"
                    >
                      Network
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="/offers"
                    >
                      Offers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {user && (
                <div>
                  <span>{user.accountId}</span>
                  <button
                    onClick={handleClick}
                    className="text-white bg-blue-600 border border-blue-600 px-6 py-2 rounded-md duration-300 hover:bg-blue-300 hover:text-white"
                  >
                    Log out
                  </button>
                </div>
              )}
              {!user && (
                <div className="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                  <button className="text-white bg-blue-600 border border-blue-600 px-6 py-2 rounded-md duration-300 hover:bg-blue-300 hover:text-white">
                    <Link to="login">login</Link>
                  </button>
                </div>
              )}
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </header>

      {/* Header Area wrapper End */}

      {/* Hero Area  */}
      <div class="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="/assets/mechanic.png"
          class="absolute top-0 left-0 w-full min-h-full ob"
          alt=""
        />
        <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div class="col-span-6">
            <span class="uppercase text-white text-xs font-bold mb-2 block">
              WE ARE EXPERTS
            </span>
            <h1 class="text-white font-extrabold text-5xl mb-8">
              A Complete Care Experience for Your Ride
            </h1>
            <p class="text-stone-100 text-base text-black font-bold">
              Your go-to destination for premium vehicle care. We specialize in
              top-notch vehicle wash and motor services, ensuring your vehicle
              looks its best and runs smoothly. Explore our services and
              experience excellence like never before.
            </p>
            <button class="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">
              <a href="signup">Let's started</a>{" "}
            </button>
          </div>
        </div>
      </div>
      {/* Hero Area End */}

      {/* Clients Section Start */}
      <div id="clients" className="bg-blue-100">
        <div class="container mx-auto px-4">
          <div class="text-center">
            <h2
              class="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Our Clients
            </h2>
          </div>
          <div class="flex flex-wrap justify-center overflow-hidden">
            <div class="w-1/3 md:w-1/4 lg:w-1/5">
              <div class="m-3 wow slideInLeft" data-wow-delay="0.3s">
                <img
                  class="client-logo"
                  src="assets/img/clients/toyota_logo.png"
                  alt=""
                />
              </div>
            </div>
            <div class="w-1/3 md:w-1/4 lg:w-1/5">
              <div class="m-3 wow slideInLeft" data-wow-delay="0.6s">
                <img
                  class="client-logo"
                  src="assets/img/clients/R.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="w-1/3 md:w-1/4 lg:w-1/5">
              <div class="m-3 wow slideInLeft" data-wow-delay="0.9s">
                <img
                  class="client-logo"
                  src="assets/img/clients/OIP (2).jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="w-1/3 md:w-1/4 lg:w-1/5">
              <div class="m-3 wow slideInLeft" data-wow-delay="1.2s">
                <img
                  class="client-logo"
                  src="assets/img/clients/OIP.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section End */}

      {/* Footer Section Start */}
      <footer id="footer" className="bg-gray-800 py-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="mx-3 mb-8">
                <div className="footer-logo mb-3">
                  <img
                    src="assets/img/new.png"
                    alt="Logo"
                    width="100"
                    height="50"
                  />
                </div>
                <p className="text-gray-300">
                  Trust us to make your vehicle shine inside and out, with
                  precision and care.
                </p>
              </div>
            </div>
            <div
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="mx-3 mb-8">
                <h3 className="font-bold text-xl text-white mb-5">Company</h3>
                <ul>
                  <li>
                    <a href="#" className="footer-links">
                      Press Releases
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-links">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-links">
                      Strategy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="mx-3 mb-8">
                <h3 className="font-bold text-xl text-white mb-5">About</h3>
                <ul>
                  <li>
                    <a href="#" className="footer-links">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-links">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-links">
                      Clients
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="mx-3 mb-8">
                <h3 className="font-bold text-xl text-white mb-5">
                  Find us on
                </h3>

                <ul className="social-icons flex justify-start">
                  <li className="mx-2">
                    <a href="#" className="footer-icon hover:bg-indigo-500">
                      <i
                        className="lni lni-facebook-original"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="footer-icon hover:bg-blue-400">
                      <i
                        className="lni lni-twitter-original"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="footer-icon hover:bg-red-500">
                      <i
                        className="lni lni-instagram-original"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="footer-icon hover:bg-indigo-600">
                      <i
                        className="lni lni-linkedin-original"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </div>
  );
}
