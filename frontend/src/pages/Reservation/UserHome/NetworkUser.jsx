import React, { useState } from "react";
import { useLogout } from "../../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Nav from "../../../components/UserNavBar";
import UserFooter from "../../../components/UserFooter";

export default function NetworkUser() {
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

      {/* Network Section Start */}
      <section id="team" className="py-24 text-center bg-blue-100">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Network
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Team Item Starts */}
            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">Kandy</h3>
                  <p>Station 01</p>
                </div>
                <div className="team-img relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31672.47055401668!2d80.04406889545852!3d7.119182479786841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fd0135a0e48b%3A0x3724eccc59e2d8db!2sKalagedihena!5e0!3m2!1sen!2slk!4v1708248358928!5m2!1sen!2slk"
                    width="360"
                    height="300"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="team-img relative text-left">
                  <p className="text-black flex items-start">
                    <span className="font-bold">Address:</span>{" "}
                    <span>365, Kandy Road, Kalagedihena,Kandy</span>
                  </p>
                  <p className="text-black flex items-start">
                    <span className="font-bold">Phone No:</span>{" "}
                    <span>0332287467</span>
                  </p>
                  <p className="text-black flex items-start">
                    <span className="font-bold">Opening Hours:</span>
                    Monday - Friday: 8:00 AM to 10:00 PM
                    <br />
                    Weekends: 7:00 AM to 8:00 PM
                  </p>
                </div>
              </div>
            </div>
            {/* Team Item Ends */}
            {/* Team Item Starts */}
            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">Galle</h3>
                  <p>Station 02</p>
                </div>
                <div className="team-img relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.5382008428655!2d80.21544011744388!3d6.057900500000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173dbcfa3335b%3A0x47ac4849e5105a81!2sBeligaha%20Junction!5e0!3m2!1sen!2slk!4v1708246572859!5m2!1sen!2slk"
                    width="360"
                    height="300"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="team-img relative text-left">
                  <p className="text-black flex items-start">
                    <span className="font-bold">Address:</span>{" "}
                    <span>102A/1,Sri Hemananda Mawatha, Beligaha, Galle</span>
                  </p>
                  <p className="text-black flex items-start">
                    <span className="font-bold">Phone No:</span>{" "}
                    <span>0775507558</span>
                  </p>
                  <p className="text-black flex items-start">
                    <span className="font-bold">Opening Hours:</span>
                    Monday - Friday: 8:00 AM to 10:00 PM
                    <br />
                    Weekends: 7:00 AM to 8:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">Colombo</h3>
                  <p>Station 03</p>
                </div>
                <div className="team-img relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63383.18112514619!2d79.83774576004035!3d6.836669472421819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a8d6ec1f8c3%3A0x47810f3e7d084753!2sDehiwala-Mount%20Lavinia!5e0!3m2!1sen!2slk!4v1708248715798!5m2!1sen!2slk"
                    width="360"
                    height="300"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="team-img relative text-left">
                  <p className="text-black flex items-start">
                    <span className="font-bold">Address:</span>{" "}
                    <span>No.130,Temple Road, Galle Road, Dehiwala</span>
                  </p>
                  <p className="text-black flex items-start">
                    <span className="font-bold">Phone No:</span>{" "}
                    <span>0113588800</span>
                  </p>
                  <p className="text-black flex items-start">
                    <span className="font-bold">Opening Hours:</span>
                    Monday - Friday: 8:00 AM to 10:00 PM
                    <br />
                    Weekends: 7:00 AM to 8:00 PM
                  </p>
                </div>
              </div>
            </div>
            {/* Team Item Ends */}
          </div>
        </div>
      </section>
      {/* network Section End */}
      <UserFooter />
    </div>
  );
}
