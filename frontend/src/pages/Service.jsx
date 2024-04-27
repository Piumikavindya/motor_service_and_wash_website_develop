import React, { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import NavBar from "../components/NavBar";

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
                    Discover our exceptional Interior Detailing service where we
                    employ the finest methods and techniques to transform your
                    vehicle's interior into a haven of cleanliness and comfort.
                    Our meticulous process goes above and beyond traditional
                    vehicle cleaning, ensuring your vehicle's interior is
                    treated with the most care and attention to detail. Our main
                    services of interior detailing include vacuuming carpets,
                    seats & ashtrays, wiping plastic & vinyl surfaces, cleaning
                    all interior glass, cleaning door jambs, and towel drying.
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
                    Experience excellence with our Exterior Detailing service,
                    where we employ cutting-edge techniques to reveal the full
                    splendor of your vehicle's exterior. We take pride in
                    offering top-tier methods, ensuring your vehicle not only
                    shines but is also protected against the elements. Our main
                    services of exterior detailing include Basic Wash for
                    standard exterior cleaning, Deluxe Wash for a premium wash
                    with tire and rim cleaning, Premium Wash for a basic wash
                    with additional wax or polish, and Hand Wash for thorough
                    hand washing for a more personalized touch.
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
                    Discover our Full-Service Packages, where we blend expertise
                    with state-of-the-art methods to offer you a comprehensive
                    vehicle care experience like no other. With an unwavering
                    commitment to excellence, our packages go beyond traditional
                    car care, ensuring your vehicle receives the utmost
                    attention, rejuvenation, and protection. Our services
                    include Full-Service Wash, providing both exterior and
                    interior cleaning; Express Detail, offering a combination of
                    exterior wash and interior detailing; Paint Brilliance,
                    where we enhance your vehicle's paint to reveal its true
                    brilliance, giving it a deep and radiant shine; and Wheel
                    and Rim Excellence, ensuring your wheels and rims shine
                    brilliantly, adding to your vehicle's overall appeal.
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
                    With our state-of-the-art wheel alignment machines utilizing
                    3D technology, we ensure that your vehicle's tires are
                    precisely set as they were when they left the factory,
                    optimizing performance, handling, fuel economy, ride
                    comfort, and tire lifespan. Wheel alignment, often
                    overlooked yet crucial, enhances various aspects of your
                    car's functionality. Our machines offer several types of
                    alignment adjustments—TOE ALIGNMENT and CASTER
                    ALIGNMENT—guaranteeing the best possible results. Renowned
                    for being the fastest, most accurate, and reliable aligner
                    ever, our technology ensures that your vehicle operates at
                    its peak performance levels, providing you with a smoother
                    and safer driving experience.
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
                  <h3 className="service-title">Wheel Alignment</h3>
                  <p className="text-gray-600">
                    On our website, you'll discover a wealth of information
                    regarding our extensive range of vehicle wash services.
                    Whether you're seeking a quick refresh or a more thorough
                    cleansing experience, we have tailored packages to suit
                    every need. You can find more information about our
                    comprehensive wash services, including Quick Wash and
                    Detailed Wash packages, on our website Our Quick Wash
                    includes body wash and tire dressing, ensuring a quick and
                    efficient cleaning process. For a more thorough cleaning,
                    our Detailed Wash package offers body wash, carpet wash,
                    glass cleaning, dash cleaning, tire dressing & wax, and
                    interior vacuuming, all with the added benefit of a free
                    interior vacuum. Visit our website to learn more about how
                    we can keep your vehicle looking its best.
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
                    Explore our Additional Services, where we extend our
                    commitment to excellence to accommodate your specific
                    vehicle care preferences. With unparalleled attention to
                    detail and a passion for perfection, our additional services
                    are designed to enhance your vehicle's aesthetics,
                    performance, and overall experience. Tire Dressing for
                    applying a glossy finish to tires, Window Tinting for
                    privacy and UV protection, Ceramic Coating for long-lasting
                    paint protection and shine, and Windshield
                    Repair/Replacement for fixing or replacing damaged
                    windshields.
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
