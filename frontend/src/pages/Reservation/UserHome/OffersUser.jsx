import React, { useState } from "react";
import { useLogout } from "../../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Nav from "../../../components/UserNavBar";
import UserFooter from "../../../components/UserFooter";

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
        <Nav />
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
      <UserFooter />
    </div>
  );
}
