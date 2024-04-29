import React, { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import NavBar from "../../components/NavBar";

export default function Home() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
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
     <NavBar/>
      </header>

      {/* Header Area wrapper End */}

     {/* Pricing section Start */}
     <section id="pricing" className="py-24 text-center bg-blue-100">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Offers
            </h2>
          </div>
          <p className="text-black font-bold leading-7">
            At MotorCarePro, we value your loyalty and appreciate your continued
            trust in our services. To show our gratitude, we're excited to
            introduce a special offer that rewards your commitment. Starting
            from your fifth reservation with us, you'll automatically unlock a
            fantastic discount. It's our way of saying thank you for choosing us
            as your preferred service provider.You can claim your discounts as
            mentioned in the below.We look forward to serving you and making
            each experience even more rewarding.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start">
            {/* single pricing table starts */}
            <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
              <div className="pricing-box wow fadeInLeft" data-wow-delay="1.2s">
                <div className="mb-3">
                  <h3 className="package-name">BASIC PACKAGE</h3>
                </div>
                <div className="mb-5">
                  <p className="text-gray-700">
                    <span className="font-bold text-2xl">5%</span>
                    <span className="font-medium text-sm">/ Save</span>
                  </p>
                </div>
                <ul className="mb-16">
                  <li className="text-gray-500 leading-9">
                 Include:
                  </li>
                  <li className="text-gray-500 leading-9">INTERIOR DETAILING</li>
                  <li className="text-gray-500 leading-9"> EXTERIOR DETAILING</li>
                 
                </ul>
                <button className="btn">Join With Us</button>
              </div>
            </div>
          
            <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
              <div
                className="pricing-box bg-blue-100 wow fadeInLeft"
                data-wow-delay="1.2s"
              >
                <div className="mb-3">
                  <h3 className="package-name">MEDIUM PACKAGE</h3>
                </div>
                <div className="mb-5">
                  <p className="text-gray-700">
                    <span className="font-bold text-2xl">10%</span>
                    <span className="font-medium text-sm">/ Save</span>
                  </p>
                </div>
                <ul className="mb-16">
                <li className="text-gray-500 leading-9">
                 Include:
                  </li>
                  <li className="text-gray-500 leading-9">WHEEL ALIGNMENT</li>
                  <li className="text-gray-500 leading-9"> FULL-SERVICE PACKAGES</li>
                </ul>
                <button className="btn">Join With Us</button>
              </div>
            </div>
          
            <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
              <div className="pricing-box">
                <div className="mb-3">
                  <h3 className="package-name">PREMIUM PACKAGE</h3>
                </div>
                <div className="mb-5">
                  <p className="text-gray-700">
                    <span className="font-bold text-2xl">15%</span>
                    <span className="font-medium text-sm">/ Save</span>
                  </p>
                </div>
                <ul className="mb-16">
                <li className="text-gray-500 leading-9">
                 Include:
                  </li>
                  <li className="text-gray-500 leading-9">INTERIOR & EXTERIOR DETAILING</li>
                  <li className="text-gray-500 leading-9"> FULL-SERVICE PACKAGES</li>
                </ul>
                <button className="btn">Join With Us</button>
              </div>
            </div>
            {/* single pricing table ends */}
          </div>
        </div>
      </section>
      {/* Pricing Table Section End */}

     
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
                Trust us to make your
              vehicle shine inside and out, with precision and care.
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
