import React, { useState } from "react";
export default function Home() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const handleSendMessage = () => {
    // Here, you can implement the logic to send the message, such as making an API request.
    // You can use the 'message' state to get the message content.
    alert("Message sent: " + message);
  };

  return (
    <div>
      {/* Header Area wrapper Start */}
      <header id="header-wrap" className="relative">
        {/* Navbar Start */}
        <div className="navigation fixed top-0 left-0 w-full z-30 duration-300 bg-gray-900">
          <div className="container">
            <nav className="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300">
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo.svg" alt="Logo" />
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
                      href="#hero-area"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="#services"
                    >
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="#feature"
                    >
                      Feature
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="#team"
                    >
                      Network
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="#pricing"
                    >
                      Offers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                <a
                  className="text-blue-600 border border-blue-600 px-10 py-3 rounded-full duration-300 hover:bg-blue-600 hover:text-white"
                  href="#feature"
                >
                  FAQ
                </a>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </header>

      {/* Header Area wrapper End */}

      {/* Hero Area  */}
      <section
        id="hero-area"
        className="bg-blue-100 pt-48 pb-10"
        style={{
          backgroundImage: `url('/assets/mechanic.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <h2
                className="text-4xl font-bold leading-snug text-black-700 mb-10 wow fadeInUp"
                data-wow-delay="1s"
              >
                A Complete Care Experience for Your Ride
              </h2>
              <p className="italic text-black text-2xl font-bold py-5 px-20 mb-5">
                Your go-to destination for premium vehicle care. We specialize
                in top-notch vehicle wash and motor services, ensuring your
                vehicle looks its best and runs smoothly. Explore our services
                and experience excellence like never before. Trust us to make
                your vehicle shine inside and out, with precision and care.
              </p>

              <div
                className="text-center mb-10 wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <a href="/order" rel="nofollow" className="btn">
          Make  a Reservations      Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Area End */}

      {/*   Services Section Start*/}
      <section id="services" className="py-24">
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
            {/* Services item */}
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
                    services of interior detailing include{" "}
                    <mark>
                      vacuuming carpets, seats & ashtrays, wiping plastic &
                      vinyl surfaces, cleaning all interior glass, cleaning door
                      jambs, and towel drying.
                    </mark>
                  </p>
                </div>
              </div>
            </div>

            {/* Services item */}
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
                    services of exterior detailing include{" "}
                    <mark>
                      Basic Wash for standard exterior cleaning, Deluxe Wash for
                      a premium wash with tire and rim cleaning, Premium Wash
                      for a basic wash with additional wax or polish, and Hand
                      Wash for thorough hand washing for a more personalized
                      touch.
                    </mark>
                  </p>
                </div>
              </div>
            </div>

            {/* Services item */}
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
                    include
                    <mark>
                      {" "}
                      Full-Service Wash, providing both exterior and interior
                      cleaning; Express Detail, offering a combination of
                      exterior wash and interior detailing; Paint Brilliance,
                      where we enhance your vehicle's paint to reveal its true
                      brilliance, giving it a deep and radiant shine; and Wheel
                      and Rim Excellence, ensuring your wheels and rims shine
                      brilliantly, adding to your vehicle's overall appeal.
                    </mark>
                  </p>
                </div>
              </div>
            </div>

            {/* Services item */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                  <i className="lni lni-cog"></i>
                </div>
                <div>
                  <h3 className="service-title">Wheel Alignment</h3>
                  <p className="text-gray-600">
                    With our state-of-the-art wheel alignment machines utilizing
                    3D technology, we ensure that your vehicle's tires are
                    precisely set as they were when they left the factory,
                    optimizing performance, handling, fuel economy, ride
                    comfort, and tire lifespan. Wheel alignment, often
                    overlooked yet crucial, enhances various aspects of your
                    car's functionality. Our machines offer several types of
                    alignment adjustments—TOE ALIGNMENT and CASTER
                    ALIGNMENT—guaranteeing the best possible results.
                    <mark>
                      {" "}
                      Renowned for being the fastest, most accurate, and
                      reliable aligner ever, our technology ensures that your
                      vehicle operates at its peak performance levels, providing
                      you with a smoother and safer driving experience.
                    </mark>
                  </p>
                </div>
              </div>
            </div>

            {/* Services item */}

            {/* Services item */}
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
                    Detailed Wash packages, on our website
                    <mark>
                      Our Quick Wash includes body wash and tire dressing,
                      ensuring a quick and efficient cleaning process. For a
                      more thorough cleaning, our Detailed Wash package offers
                      body wash, carpet wash, glass cleaning, dash cleaning,
                      tire dressing & wax, and interior vacuuming, all with the
                      added benefit of a free interior vacuum. Visit our website
                      to learn more about how we can keep your vehicle looking
                      its best.
                    </mark>
                  </p>
                </div>
              </div>
            </div>

            {/* Services item */}
            {/* Services item */}
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
                    performance, and overall experience.
                    <mark>
                      Tire Dressing for applying a glossy finish to tires,
                      Window Tinting for privacy and UV protection, Ceramic
                      Coating for long-lasting paint protection and shine, and
                      Windshield Repair/Replacement for fixing or replacing
                      damaged windshields.
                    </mark>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services End */}

      {/* Feature Section Start  */}
      <div id="feature" className="bg-blue-100 py-24">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <div className="mb-5 lg:mb-0">
                <h2
                  className="mb-12 section-heading wow fadeInDown"
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
                <img src="assets/content-image-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Section End  */}

      {/* Network Section Start */}
      <section id="team" className="py-24 text-center">
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
                    width="380"
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

      {/* Clients Section Start */}
      <div id="clients" className="py-16 bg-blue-100">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              WE WORK WITH WORLD RENOWNED VEHICLE CARE BRANDS
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 md:w-1/4 lg:w-1/4">
              <div className="m-3 wow fadeInUp" data-wow-delay="0.3s">
                <img
                  className="client-logo"
                  src="assets/img/clients/toyota_logo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/4">
              <div className="m-3 wow fadeInUp" data-wow-delay="0.6s">
                <img
                  className="client-logo"
                  src="assets/img/clients/R.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/4">
              <div className="m-3 wow fadeInUp" data-wow-delay="0.9s">
                <img
                  className="client-logo"
                  src="assets/img/clients/OIP (2).jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/4">
              <div className="m-3 wow fadeInUp" data-wow-delay="1.2s">
                <img
                  className="client-logo"
                  src="assets/img/clients/OIP.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Clients Section End */}

      {/* Pricing section Start */}
      <section id="pricing" className="py-16">
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
                  <h3 className="package-name">Basic</h3>
                </div>
                <div className="mb-5">
                  <p className="text-gray-700">
                    <span className="font-bold text-2xl">5%</span>
                    <span className="font-medium text-sm">/ Save</span>
                  </p>
                </div>
                <ul className="mb-16">
                  <li className="text-gray-500 leading-9">
                    From 5 to 10 reservations
                  </li>
                  <li className="text-gray-500 leading-9">Claim Times : 1</li>
                </ul>
                <a href="#" className="btn">
                  Get It
                </a>
              </div>
            </div>
            {/* single pricing table ends */}
            {/* single pricing table starts */}
            <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
              <div
                className="pricing-box bg-blue-100 wow fadeInLeft"
                data-wow-delay="1.2s"
              >
                <div className="mb-3">
                  <h3 className="package-name">MEDIUM</h3>
                </div>
                <div className="mb-5">
                  <p className="text-gray-700">
                    <span className="font-bold text-2xl">10%</span>
                    <span className="font-medium text-sm">/ Save</span>
                  </p>
                </div>
                <ul className="mb-16">
                  <li className="text-gray-500 leading-9">
                    From 11 to 15 reservations
                  </li>
                  <li className="text-gray-500 leading-9">Claim times : 2</li>
                </ul>
                <a href="#" className="btn">
                  Get It
                </a>
              </div>
            </div>
            {/* single pricing table ends */}
            {/* single pricing table starts */}
            <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3">
              <div className="pricing-box">
                <div className="mb-3">
                  <h3 className="package-name">PREMIUM</h3>
                </div>
                <div className="mb-5">
                  <p className="text-gray-700">
                    <span className="font-bold text-2xl">15%</span>
                    <span className="font-medium text-sm">/ Save</span>
                  </p>
                </div>
                <ul className="mb-16">
                  <li className="text-gray-500 leading-9">
                    More than 16 reservations
                  </li>
                  <li className="text-gray-500 leading-9">Claim times : 3</li>
                </ul>
                <a href="#" className="btn">
                  Get It
                </a>
              </div>
            </div>
            {/* single pricing table ends */}
          </div>
        </div>
      </section>
      {/* Pricing Table Section End */}

      {/* Subscribe Section Start */}
      <section id="Subscribes" className="text-center py-20 bg-blue-100">
        <div className="container">
          <div className="flex justify-center mx-3">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <h4
                className="mb-3 section-heading wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Start For Free
              </h4>
              <p
                className="mb-4 text-gray-600 leading-loose text-sm wow fadeInUp"
                data-wow-delay="0.6s"
              >
                Existing customized ideas through client-based deliverables.{" "}
                <br /> Compellingly unleash fully tested outsourcing
              </p>
              <form>
                <div className="wow fadeInDown" data-wow-delay="0.3s">
                  <input
                    type="Email"
                    className="w-full mb-5 bg-white border border-blue-300 rounded-full px-5 py-3 duration-300 focus:border-blue-600 outline-none"
                    name="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="border-0 bg-blue-600 text-white rounded-full w-12 h-12 duration-300 hover:opacity-75"
                    type="submit"
                  >
                    <i className="lni lni-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Subscribe Section End */}

      {/* Contact Section Start */}
      <section id="contact" className="py-24">
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
                        <button className="btn" id="form-submit" type="submit" onClick={handleSendMessage}>
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
                  <img src="assets/img/logo.svg" alt="" />
                </div>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam excepturi quasi, ipsam voluptatem.
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

      <section className="bg-gray-800 py-6 border-t-2 border-gray-700 border-dotted">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <p className="text-white">
                Designed and Developed by{" "}
                <a
                  className="text-white duration-300 hover:text-blue-600"
                  href="https://tailwindtemplates.co"
                  rel="nofollow"
                >
                  TailwindTemplates
                </a>{" "}
                and{" "}
                <a
                  className="text-white duration-300 hover:text-blue-600"
                  href="https://uideck.com"
                  rel="nofollow"
                >
                  UIdeck
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Go to Top Link */}
      <a
        href="#"
        className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg z-20 duration-300 hover:bg-blue-400"
      >
        <i className="lni lni-arrow-up"></i>
      </a>

      {/* Preloader */}
      {/* <div id="preloader">
        <div className="loader" id="loader-1"></div>
      </div> */}
      {/* End Preloader */}

      {/* All js Here */}
   
    </div>
  );
}
