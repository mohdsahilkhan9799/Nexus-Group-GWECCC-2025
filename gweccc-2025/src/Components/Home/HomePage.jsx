import React, { useEffect, useState } from "react";
import "./HomePage.css"; // Custom CSS with 3D parallax & neon effects
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faHourglassHalf, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const speakers = [
  {
      name: "H.E. Dr. Mohamed bin Mubarak Bin Daina",
      designation: "Advisory Committee & Conference Chair",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKheHoZzsLmerT_1OJ_YEDqUw-XcGt9YPAQ&s",
      description: "Minister of Oil and Environment Special Envoy for Climate Affairs Kingdom of Bahrain",
  },
  {
      name: "H.E. Faihan Mohamed Al Faihani",
      designation: "Steering Committee Chair",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRFUCVItZ0KDl1KeAvdSIv_u3P8qOUrePzQ&s",
      description: "Undersecretary Ministry of Oil and Environment Kingdom of Bahrain",
  },
  {
      name: "H.E. Shaikh Khalid Bin Abdulla Al Khalifa",
      designation: "Event Patron",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjnzWF-1d1V__FkpHS39cOnfNgAdGKcDMdw&s",
      description: "Deputy Prime Minister Kingdom of Bahrain",
  },
  
];

const scheduleData = {
  "Day 1": [
    { time: "10:00 AM", title: "Opening Ceremony", speaker: "H.E. Dr. Mohamed bin Mubarak Bin Daina", description: "Advisory Committee & Conference Chair" },
    { time: "11:30 AM", title: "Climate Change & Policy", speaker: "H.E. Faihan Mohamed Al Faihani", description: "Steering Committee Chair" },
    { time: "2:00 PM", title: "Renewable Energy Innovations", speaker: "H.E. Shaikh Khalid Bin Abdulla Al Khalifa", description: "EEvent Patron." }
  ],
  "Day 2": [
    { time: "2:00 PM", title: "Renewable Energy Innovations", speaker: "H.E. Shaikh Khalid Bin Abdulla Al Khalifa", description: "EEvent Patron." },
    { time: "10:00 AM", title: "Opening Ceremony", speaker: "H.E. Dr. Mohamed bin Mubarak Bin Daina", description: "Advisory Committee & Conference Chair" },
    { time: "11:30 AM", title: "Climate Change & Policy", speaker: "H.E. Faihan Mohamed Al Faihani", description: "Steering Committee Chair" },
  ]
};
const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); // Initialize AOS with smooth animation
    gsap.fromTo(".slider-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 });
  }, []);
 
const calculateTimeLeft = () => {
    const eventDate = new Date("February 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
      const [openIndex, setOpenIndex] = useState(null);
  const toggleAgenda = (index) => {
    setOpenIndex(openIndex === index ? null : index);
};

const [activeDay, setActiveDay] = useState("Day 1");
        const [expandedSession, setExpandedSession] = useState(null);

        const [formData, setFormData] = useState({
           name: "",
           email: "",
           message: "",
         });
       
         const [errors, setErrors] = useState({});
         const [submitted, setSubmitted] = useState(false);
       
         const validateForm = () => {
           let formErrors = {};
           if (!formData.name) formErrors.name = "Name is required!";
           if (!formData.email) formErrors.email = "Email is required!";
           if (!formData.message) formErrors.message = "Message is required!";
           setErrors(formErrors);
           return Object.keys(formErrors).length === 0;
         };
       
         const handleChange = (e) => {
           setFormData({ ...formData, [e.target.name]: e.target.value });
           setErrors({ ...errors, [e.target.name]: "" }); // Remove error as user types
         };
       
         const handleSubmit = (e) => {
           e.preventDefault();
           if (validateForm()) {
             setSubmitted(true);
             setFormData({ name: "", email: "", message: "" }); // Reset form
             setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3 seconds
           }
         };

         
  return (
    <>
    <div className="homepage" style={{overflow:"hidden"}}>
      {/* 🚀 3D Parallax Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        className="event-slider"
      >
        <SwiperSlide>
          <Tilt options={{ max: 25, speed: 400 }}>
            <div className="slide" id="home" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-rendering-dark-earth-space_23-2151051362.jpg?ga=GA1.1.1828204049.1737634267&semt=ais_authors_boost')" }}>
              <div className="slider-content">
                <h1 >🌍 GWECCC 2025</h1>
                <p >Global Water, Energy & Climate Change Congress</p>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide>
          <Tilt options={{ max: 25, speed: 400 }}>
            <div className="slide" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-rendering-dark-earth-space_23-2151051369.jpg?ga=GA1.1.1828204049.1737634267&semt=ais_authors_boost')" }}>
              <div className="slider-content">
                <h1 >📍 Location:</h1>
                <p >Kingdom of Bahrain</p>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide>
          <Tilt options={{ max: 25, speed: 400 }}>
            <div className="slide" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/earth-seen-from-space_23-2150528639.jpg?ga=GA1.1.1828204049.1737634267&semt=ais_authors_boost')" }}>
              <div className="slider-content">
                <h1 data-aos="fade-up">📅 Date: 14/01/2025</h1>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>

        
      </Swiper>
    </div>

    {/* about */}

    <section className="about-section"id="about">
      <div className="container-fluid">
        <motion.h2 className="about-title" >
          About <span className="highlight"data-aos="fade-up">GWECCC 2025</span>
        </motion.h2>

        {/* About Section */}
        <div className="row align-items-center about-content">
          {/* Left Column: About Text */}
          <motion.div 
  className="col-lg-6 col-md-12 about-text animated-box"
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  <p data-aos="fade-left px-2" style={{overflow:"hidden"}}>
    The <b>Global Water, Energy & Climate Change Congress (GWECCC)</b> 2025
    is an international event focused on sustainability, innovation,
    and global policy solutions. It brings together experts, policymakers, 
    and industry leaders to discuss the future of water, energy, and climate change resilience.
  </p>
  <p data-aos="fade-right px-2"style={{overflow:"hidden"}}>
    The event will be held in the <b>Kingdom of Bahrain</b> on <b>February 14, 2025</b>.
    Join us for thought-provoking sessions, expert panels, and networking opportunities.
  </p>
</motion.div>


          {/* Right Column: Event Image */}
          <motion.div 
            className="col-lg-6 col-md-12 about-image pt-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D22AQHzubosTcY6Lg/feedshare-shrink_800/feedshare-shrink_800/0/1694847418586?e=2147483647&v=beta&t=474dHgcMPcT6wiXFgRvEGsKx6pArscT5lq398k2K-a8"
              alt="GWECCC Event"
              className="event-img"
              data-aos="fade-down"
            />
          </motion.div>
        </div>

        {/* Countdown Timer */}
        <div className="countdown">
          <h1 data-aos="fade-up " className="about-title1">Event Starts In</h1>
          <div className="row justify-content-center countdown-timer">
            {[
              { icon: faCalendarAlt, value: timeLeft.days, label: "Days" },
              { icon: faHourglassHalf, value: timeLeft.hours, label: "Hours" },
              { icon: faClock, value: timeLeft.minutes, label: "Mins" },
              { icon: faStopwatch, value: timeLeft.seconds, label: "Secs" },
            ].map((item, index) => (
              <div className="col-lg-2 col-md-3 col-sm-6 countdown-item" key={index} data-aos="fade-up">
                <FontAwesomeIcon icon={item.icon} />
                <span data-aos="fade-left" >{item.value || "00"}</span> {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="reg"style={{overflow:"hidden"}}>
  <h3 data-aos="fade-up" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Register
  </h3>
</div>

         {/* Key Highlights Section */}
      <div className="highlights-section">
        <h3 className="highlight-title about-title1" data-aos="fade-up">Key Highlights</h3>

        <div className="highlights-grid"style={{overflow:"hidden"}}>
          <div className="highlight-card" data-aos="flip-left"style={{overflow:"hidden"}}>
            <h4>🌍 Global Sustainability Discussions</h4>
          </div>

          <div className="highlight-card" data-aos="flip-right"style={{overflow:"hidden"}}>
            <h4>💡 Energy Innovation & Green Technologies</h4>
          </div>

          <div className="highlight-card" data-aos="flip-left"style={{overflow:"hidden"}}>
            <h4>📢 Expert Panels & Keynote Speeches</h4>
          </div>

          <div className="highlight-card" data-aos="flip-right"style={{overflow:"hidden"}}>
            <h4>🌿 Climate Action Strategies</h4>
          </div>

          <div className="highlight-card" data-aos="flip-left"style={{overflow:"hidden"}}>
            <h4>🤝 Networking with Global Leaders</h4>
          </div>
        </div>
        </div>
      </div>
    </section>
    {/* about */}

    {/* speakers */}
    <section className="speakers-section"id="speakers"style={{overflow:"hidden"}}>
            <div className="container">
                <h2 className=" about-title1" data-aos="fade-up"style={{overflow:"hidden"}} >Our Speakers</h2>

                <div className="row speakers-grid">
                    {speakers.map((speaker, index) => (
                        <div 
                            className="col-lg-3 col-md-6 col-sm-12 speaker-card" 
                            key={index} 
                            data-aos="fade-up" 
                            onClick={() => setSelectedSpeaker(speaker)}
                        >
                            <div className="speaker-image">
                                <img src={speaker.image} alt={speaker.name} />
                            </div>
                            <div className="speaker-info">
                                <h3>{speaker.name}</h3>
                                <p>{speaker.designation}</p>
                            </div>
                            {/* Downward Arrow Icon */}
                            <div className="arrow-down">▼ <FontAwesomeIcon icon="fa-solid fa-eye" /></div>
                            
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Speaker Details */}
            {selectedSpeaker && (
                <div className="modal-overlay" onClick={() => setSelectedSpeaker(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-modal" onClick={() => setSelectedSpeaker(null)}>&times;</span>
                        <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="modal-image" />
                        <h3>{selectedSpeaker.name}</h3>
                        <p className="modal-designation">{selectedSpeaker.designation}</p>
                        <p className="modal-description">{selectedSpeaker.description}</p>
                    </div>
                </div>
            )}
        </section>
    {/* speakers */}


    {/* schedule */}
    <div>
       <section className="schedule-section"id="schedule"style={{overflow:"hidden"}}>
      <div className="container">
        <h2 className="title" data-aos="fade-up" style={{overflow:"hidden"}}>Event Schedule</h2>

        {/* Day Selector Tabs */}
        <div className="tabs">
          {Object.keys(scheduleData).map((day) => (
            <button key={day} className={`tab ${activeDay === day ? "active" : ""}`} onClick={() => setActiveDay(day)}>
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Details */}
        <div className="schedule-details" data-aos="fade-up"style={{overflow:"hidden"}}>
          {scheduleData[activeDay].map((session, index) => (
            <div key={index} className="session-card">
              <div className="session-header" onClick={() => setExpandedSession(expandedSession === index ? null : index)}>
                <h3>{session.time} - {session.title}</h3>
                <span className="toggle-icon">{expandedSession === index ? "▲" : "▼"}</span>
              </div>
              {expandedSession === index && (
                <div className="session-details">
                  <p><b>Speaker:</b> {session.speaker}</p>
                  <p>{session.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    {/* schedule */}


    {/* contact */}
    <section className="contact-section"id="contact"style={{overflow:"hidden"}}>
      <div className="container" >
        <h2 className="title" data-aos="fade-up"style={{overflow:"hidden"}}>Get in Touch</h2>

        <div className="contact-content">
          {/* Left Side: Contact Information */}
          <div className="contact-info" data-aos="fade-right"style={{overflow:"hidden"}}>
            <h3 className="text-center text-danger">  Contact Information</h3>
            <p className="text-center">Address: Road 2832, BNH Tower 4th Floor Building 2491 Block 428, Bahrain</p>
            <p className="text-center"> nexus@gweccc2025.com</p>
            <p className="text-center">+973 1751 1777</p>

            {/* Google Maps Embed */}
            <div className="map-container" data-aos="fade-up"style={{overflow:"hidden"}}>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231850.30212946268!2d50.43237651208621!3d26.06670076240314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a582ab822f11%3A0x8225b66fc93e193a!2sManama%2C%20Bahrain!5e0!3m2!1sen!2sbh!4v1679986754567"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form" data-aos="fade-left"style={{overflow:"hidden"}}>
            {submitted && <p className="success-message">Your message has been sent successfully!</p>}
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} />
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <div className="map-container" style={{overflow:"hidden"}}>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231850.30212946268!2d50.43237651208621!3d26.06670076240314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a582ab822f11%3A0x8225b66fc93e193a!2sManama%2C%20Bahrain!5e0!3m2!1sen!2sbh!4v1679986754567"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
      </div>


      
    </section>
    {/* contact */}


    </>
  );
};

export default HomePage;
