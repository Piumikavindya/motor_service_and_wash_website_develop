import React, { useState } from "react";
import { useLogout } from "../../../hooks/useLogout.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext.js";
import "../../../styles/animation.css";
import Nav from "../../../components/UserNavBar.jsx";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const { accountId } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate(); // Added parentheses here
  const { logout } = useLogout();

 
  const handleNavigate = () => {
    navigate(`/reservation/${accountId}`);
  };

  return (
    <div>
      {/* Header Area wrapper Start */}
      <header id="header-wrap" className="relative">
      <Nav/>
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
            <button
              class="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10"
              onClick={handleNavigate}
            >
              {" "}
              Make Reservation
            </button>
          </div>
        </div>
      </div>
      {/* Hero Area End */}

      {/* Clients Section Start */}
      <div id="clients">
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
                  src="../assets/img/clients/toyota_logo.png"
                  alt=""
                />
              </div>
            </div>
            <div class="w-1/3 md:w-1/4 lg:w-1/5">
              <div class="m-3 wow slideInLeft" data-wow-delay="0.6s">
                <img
                  class="client-logo"
                  src="../assets/img/clients/R.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="w-1/3 md:w-1/4 lg:w-1/5">
              <div class="m-3 wow slideInLeft" data-wow-delay="0.9s">
                <img
                  class="client-logo"
                  src="../assets/img/clients/OIP (2).jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="w-1/3 md:w-1/4 lg:w-1/5">
              <div class="m-3 wow slideInLeft" data-wow-delay="1.2s">
                <img
                  class="client-logo"
                  src="../assets/img/clients/OIP.jpg"
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
                    src="../assets/img/new.png"
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
