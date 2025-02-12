import React, { useEffect, useState } from "react";
import "./HomePage.css"; // Custom CSS with 3D parallax & neon effects
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import { Tilt } from "react-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
const speakers = [
  {
    name: "Mr. Sameer Kochhar",
    designation: "Chairman, SKOCH Group",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    description: "A well-known thought leader and policy expert in governance and economic reforms.",
  },
  {
    name: "Mr. V Srinivas",
    designation: "Secretary DARPG & DPPW, GOI",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    description: "Government official leading reforms in public administration and pension management.",
  },
  {
    name: "Ms. S Radha Chauhan",
    designation: "Former Secretary, Govt of India",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    description: "Expert in digital transformation and e-governance for public sector initiatives.",
  },
  {
    name: "Mr. IPS Sethi",
    designation: "Director General, NIC",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    description: "Leading National Informatics Centre with expertise in cybersecurity and digital services.",
  },
];

const scheduleData = {
  "Day 1": [
    { time: "10:00 AM", title: "Opening Ceremony", speaker: "Mr. Sameer Kochhar", description: "Welcome address and keynote speech." },
    { time: "11:30 AM", title: "Climate Change & Policy", speaker: "Dr. John Smith", description: "Panel discussion on sustainability and government policies." },
    { time: "2:00 PM", title: "Renewable Energy Innovations", speaker: "Prof. Alice Brown", description: "Exploring the latest advancements in solar and wind energy." }
  ],
  "Day 2": [
    { time: "10:00 AM", title: "Smart Water Management", speaker: "Dr. Robert White", description: "Technology-driven solutions for water conservation." },
    { time: "12:00 PM", title: "Digital Transformation in Governance", speaker: "Ms. S Radha Chauhan", description: "How technology is reshaping government services." },
    { time: "3:00 PM", title: "Closing Remarks", speaker: "Mr. IPS Sethi", description: "Final thoughts and wrap-up of GWECCC 2025." }
  ]
};
const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); // Initialize AOS with smooth animation
    gsap.fromTo(".slider-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 });
  }, []);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
   const [activeDay, setActiveDay] = useState("Day 1");
    const [expandedSession, setExpandedSession] = useState(null);


    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const validateForm = () => {
      let errors = {};
      if (!formData.name) errors.name = "Name is required.";
      if (!formData.email) errors.email = "Email is required.";
      if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email.";
      if (!formData.message) errors.message = "Message is required.";
      return errors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
        setFormData({ name: "", email: "", message: "" });
      }
    };
  return (
    <>
    <div className="homepage">
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
            <div className="slide" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-rendering-dark-earth-space_23-2151051362.jpg?ga=GA1.1.1828204049.1737634267&semt=ais_authors_boost')" }}>
              <div className="slider-content">
                <h1 data-aos="fade-up">🌍 GWECCC 2025</h1>
                <p data-aos="zoom-in">Global Water, Energy & Climate Change Congress</p>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide>
          <Tilt options={{ max: 25, speed: 400 }}>
            <div className="slide" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-rendering-dark-earth-space_23-2151051369.jpg?ga=GA1.1.1828204049.1737634267&semt=ais_authors_boost')" }}>
              <div className="slider-content">
                <h1 data-aos="fade-up">📍 Location:</h1>
                <p data-aos="zoom-in">Kingdom of Bahrain</p>
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
    <section className="about-section" >
      <div className="container">
        <h2 className="title" data-aos="fade-up" id="about">About GWECCC 2025</h2>

        {/* About Section */}
        <div className="about-content">
          
          {/* Left Side: About Text */}
          <div className="text-content" data-aos="fade-left">
            <p style={{textAlign:"justify"}}data-aos="fade-left">
              The <b>Global Water, Energy & Climate Change Congress (GWECCC)</b> 2025
              is an international event focused on sustainability, innovation,
              and global policy solutions. It brings together experts,
              policymakers, and industry leaders to discuss the future of water,
              energy, and climate change resilience.
            </p>
            <p style={{textAlign:"justify"}}data-aos="fade-right">
              The event will be held at the <b>Kingdom of Bahrain</b> on
              <b> February 14, 2025</b>. Join us for thought-provoking sessions,
              expert panels, and networking opportunities.
            </p>
          </div>

          {/* Right Side: Event Image */}
          <div className="image-container" data-aos="fade-left">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D22AQHzubosTcY6Lg/feedshare-shrink_800/feedshare-shrink_800/0/1694847418586?e=2147483647&v=beta&t=474dHgcMPcT6wiXFgRvEGsKx6pArscT5lq398k2K-a8"
              alt="GWECCC Event"
              className="event-image"
            />
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="highlights-section">
          <h3 className="highlight-title" data-aos="fade-up">Key Highlights</h3>

          <div className="highlights-grid">
            <div className="highlight-card" data-aos="flip-left">
              <h4>🌍 Global Sustainability Discussions</h4>
            </div>

            <div className="highlight-card" data-aos="flip-right">
              <h4>💡 Energy Innovation & Green Technologies</h4>
            </div>

            <div className="highlight-card" data-aos="flip-left">
              <h4>📢 Expert Panels & Keynote Speeches</h4>
            </div>

            <div className="highlight-card" data-aos="flip-right">
              <h4>🌿 Climate Action Strategies</h4>
            </div>

            <div className="highlight-card" data-aos="flip-left">
              <h4>🤝 Networking with Global Leaders</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="speakers-section">
      <div className="container">
        <h2 className="title" data-aos="fade-up">Our Speakers</h2>

        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div className="speaker-card" key={index} data-aos="fade-up" onClick={() => setSelectedSpeaker(speaker)}>
              <div className="speaker-image">
                <img src={speaker.image} alt={speaker.name} />
              </div>
              <div className="speaker-info">
                <h3>{speaker.name}</h3>
                <p>{speaker.designation}</p>
              </div>
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

    <section className="schedule-section">
      <div className="container">
        <h2 className="title" data-aos="fade-up">Event Schedule</h2>

        {/* Day Selector Tabs */}
        <div className="tabs">
          {Object.keys(scheduleData).map((day) => (
            <button key={day} className={`tab ${activeDay === day ? "active" : ""}`} onClick={() => setActiveDay(day)}>
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Details */}
        <div className="schedule-details" data-aos="fade-up">
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

    <section className="contact-section">
      <div className="container">
        <h2 className="title" data-aos="fade-up">Get in Touch</h2>

        <div className="contact-content">
          {/* Left Side: Contact Information */}
          <div className="contact-info" data-aos="fade-right">
            <h3>Contact Information</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Conference Road, New Delhi, India</p>
            <p><i className="fas fa-envelope"></i> contact@gweccc2025.com</p>
            <p><i className="fas fa-phone"></i> +91 98765 43210</p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form" data-aos="fade-left">
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

        {/* Google Maps Embed (Optional) */}
        <div className="map-container" data-aos="fade-up">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8393742403!2d77.06889937477234!3d28.527554103688226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d1601f4b5b%3A0x5b1a6c5c6e4f8b62!2sNew+Delhi%2C+Delhi!5e0!3m2!1sen!2sin!4v1679986754567"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
    </>
  );
};

export default HomePage;
