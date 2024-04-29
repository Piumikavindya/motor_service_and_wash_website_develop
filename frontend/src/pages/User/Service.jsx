import React, { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import NavBar from "../../components/NavBar";

export default function Service() {
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
        <NavBar />
      </header>

      {/* Header Area wrapper End */}

      {/*   Services Section Start*/}
      <section id="services" className="py-24 text-center bg-blue-100">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Our Services
            </h2>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                  <i className="lni lni-cog"></i>
                </div>
                <div>
                  <h3 className="service-title">INTERIOR DETAILING</h3>
                  <p className="text-gray-600">
                    Indulge in our Interior Detailing service, designed to
                    elevate your vehicle's interior to a realm of immaculate
                    cleanliness and luxury. Our meticulous approach surpasses
                    standard cleaning, meticulously addressing every detail for
                    a pristine result. From vacuuming to glass cleaning, we
                    leave no corner untouched, ensuring your vehicle is pampered
                    to perfection.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                  <i className="lni lni-cog"></i>
                </div>
                <div>
                  <h3 className="service-title">EXTERIOR DETAILING</h3>
                  <p className="text-gray-600">
                    Embark on a journey of automotive opulence with our Exterior
                    Detailing service, where innovation meets elegance to unveil
                    your vehicle's true beauty. Our advanced techniques
                    guarantee a radiant finish while safeguarding your vehicle
                    from environmental factors. From Basic to Hand Wash, each
                    detailing package is tailored to ensure your vehicle
                    receives the utmost care and attention, leaving it gleaming
                    with pride.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                  <i className="lni lni-cog"></i>
                </div>
                <div>
                  <h3 className="service-title">FULL-SERVICE PACKAGES</h3>
                  <p className="text-gray-600">
                    Embark on a journey of automotive luxury with our
                    Full-Service Packages, meticulously crafted to elevate your
                    vehicle care experience. From Full-Service Wash to Paint
                    Brilliance, each package is designed to rejuvenate and
                    protect your vehicle, inside and out. Experience the epitome
                    of excellence as we unveil the true brilliance of your
                    vehicle's paint and ensure every detail shines with
                    radiance.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                  <i className="lni lni-cog"></i>
                </div>
                <div>
                  <h3 className="service-title">WHEEL ALIGNMENT</h3>
                  <p className="text-gray-600">
                    Experience precision and performance with our cutting-edge
                    wheel alignment machines, powered by 3D technology. We
                    meticulously align your vehicle's tires to factory
                    specifications, optimizing every aspect of its performance
                    and longevity. From handling to fuel efficiency, our
                    alignment adjustments, including TOE ALIGNMENT and CASTER
                    ALIGNMENT, ensure unparalleled results. Trust in our
                    renowned technology for the fastest, most accurate, and
                    reliable alignment, guaranteeing a smoother and safer
                    driving experience for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                  <i className="lni lni-cog"></i>
                </div>
                <div>
                  <h3 className="service-title">WASH SERVICES</h3>
                  <p className="text-gray-600">
                    Discover a wealth of information about our extensive range
                    of vehicle wash services on our website. Whether you desire
                    a quick refresh or a thorough cleansing experience, our
                    tailored packages cater to every need. Explore our Quick
                    Wash, which includes body wash and tire dressing for an
                    efficient cleaning process. For a more comprehensive clean,
                    our Detailed Wash package offers body wash, carpet wash,
                    glass cleaning, dash cleaning, tire dressing & wax, and
                    interior vacuuming, complemented by a complimentary interior
                    vacuum. Visit our website to learn more about how we can
                    help your vehicle look its best.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                  <i className="lni lni-cog"></i>
                </div>
                <div>
                  <h3 className="service-title">ADDITIONAL SERVICES</h3>
                  <p className="text-gray-600">
                    Discover a wealth of information on our website about our
                    diverse range of vehicle wash services. Whether you need a
                    quick refresh or a comprehensive cleanse, our tailored
                    packages cater to every need. Explore our Quick Wash for a
                    rapid yet effective solution with body wash and tire
                    dressing. Or opt for our Detailed Wash, which includes body
                    wash, carpet wash, glass cleaning, dash cleaning, tire
                    dressing & wax, and interior vacuuming, along with a
                    complimentary interior vacuum. Visit our website today to
                    see how we can maintain your vehicle's pristine appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
