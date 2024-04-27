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
        <Nav/>
      </header>

      {/* Header Area wrapper End */}


    
      

      {/* Services End */}

      {/* Feature Section Start  */}
      <div id="feature" className="bg-blue-100 py-24">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <div className="mb-5 lg:mb-0">
                <h2
                  className="mb-12 section-heading wow fadeInDown text-center"
                  data-wow-delay="0.3s"
                >
                  Learn More About Us
                </h2>

                <div className="flex flex-wrap">
                  <div className="w-full sm:w-1/2 lg:w-1/2">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        <i className="lni lni-layers"></i>
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title">Our Vision</h4>
                        <p>
                          {" "}
                          The mission statement aims to become the premier
                          authority in the Sri Lankan automobile industry,
                          characterized by trust, recognition, and respect. It
                          aims to redefine excellence by consistently delivering
                          innovative solutions, establishing enduring
                          relationships based on trust and respect. By
                          leveraging industry insights, it aims to shape the
                          future of mobility in Sri Lanka, setting new
                          benchmarks for quality, reliability, and customer
                          service.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/2">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        <i className="lni lni-gift"></i>
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title">Our Mission</h4>
                        <p>
                          {" "}
                          We strive to provide the best quality automobile
                          product and services through conveniently located Car
                          Care Service Centre’s, at affordable prices by making
                          our brand a consumers’ first choice for automobile
                          product and service supports. Trust will be gained
                          from consumers through the genuine support given to
                          them by our skilled and dedicated service staff. We
                          are committed to deliver our service values and we are
                          proud of our customized service
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/2">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        <i className="lni lni-laptop-phone"></i>
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title">Our Values</h4>
                        <p>
                          {" "}
                          <ul>
                            <li>
                              &#8226; We act with integrity and are honest about
                              our work to be fair & ethical.
                            </li>
                            <li>
                              &#8226; We develop long-term relationships with
                              our stakeholders by practicing fair principles.
                            </li>
                            <li>
                              &#8226; We maintain the highest standards in
                              professional diagnosis service & repair using
                              state-of-the-art equipment & genuine auto parts
                              for our customers.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/2">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        <i className="lni lni-leaf"></i>
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title">Contact Us</h4>
                        <p>
                          {" "}
                          We're here to assist you. If you have any questions,
                          feedback, or inquiries, please don't hesitate to get
                          in touch with us. Our dedicated team is committed to
                          providing you with the best support and assistance.
                          You can reach us via the provided contact information
                          and send us a message. Your input is valuable to us,
                          and we look forward to hearing from you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div
                className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <img src="../assets/content-image-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Section End  */}
    <UserFooter/>


     
    </div>
  );
}
