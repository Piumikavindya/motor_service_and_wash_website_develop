import React, { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import NavBar from "../components/NavBar";

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


       {/* Contact Section Start */}
       <section id="contact" className="py-24 text-center bg-blue-100">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 text-4xl text-gray-700 font-bold tracking-wide wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Contact
            </h2>
          </div>

          <div
            className="flex flex-wrap contact-form-area wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="w-full md:w-1/2">
              <div className="contact">
                <h2 className="uppercase font-bold text-xl text-gray-700 mb-5 ml-3">
                  Contact Form
                </h2>
                <form id="contactForm" action="assets/contact.php">
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                      <div className="mx-3">
                        <input
                          type="text"
                          className="form-input rounded-full"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required
                          data-error="Please enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                      <div className="mx-3">
                        <input
                          type="text"
                          placeholder="Email"
                          id="email"
                          className="form-input rounded-full"
                          name="email"
                          required
                          data-error="Please enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mx-3">
                        <input
                          type="text"
                          placeholder="Subject"
                          id="subject"
                          name="subject"
                          className="form-input rounded-full"
                          required
                          data-error="Please enter your subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mx-3">
                        <textarea
                          className="form-input rounded-lg"
                          id="message"
                          name="message"
                          placeholder="Your Message"
                          rows="5"
                          data-error="Write your message"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="submit-button mx-3">
                        <button
                          className="btn"
                          id="form-submit"
                          type="submit"
                          onClick={handleSendMessage}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="ml-3 md:ml-12 wow fadeIn">
                <h2 className="uppercase font-bold text-xl text-gray-700 mb-5">
                  Get In Touch
                </h2>
                <div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="contact-icon">
                      <i className="lni lni-map-marker"></i>
                    </div>
                    <p className="pl-3">
                      6th Floor, No. 101, Maya Avenue, Colombo 06
                    </p>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="contact-icon">
                      <i className="lni lni-envelope"></i>
                    </div>
                    <p className="pl-3">
                      <a href="#" className="block">
                        carcare@laugfs.lk
                      </a>
                      <a href="mailto:info@laugfs.lk" className="block">
                        info@laugfs.lk
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="contact-icon">
                      <i className="lni lni-phone-set"></i>
                    </div>
                    <p className="pl-3">
                      <a href="#" className="block">
                        +94 11 5 566 222
                      </a>
                      <a href="#" className="block">
                        +94 11 5 286 912
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="contact-icon">
                      <i className="lni lni-phone-set"></i>
                    </div>
                    <p className="pl-3">
                      <a href="#" className="block">
                        +94 11 5 286 912
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Map Section Start */}
      <section id="google-map-area">
        <div className="mx-6 mb-6">
          <div className="flex">
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0842778362085!2d79.86827547404827!3d6.880506718913695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bcbb187fa4d%3A0x66f2597f23b46e33!2s6th%20Floor%2C%20101%20Maya%20Ave%2C%20Colombo%2000500!5e0!3m2!1sen!2slk!4v1708250477277!5m2!1sen!2slk"
                style={{ border: "0", height: "450px", width: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section End */}

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
     
    </div>
  );
}
