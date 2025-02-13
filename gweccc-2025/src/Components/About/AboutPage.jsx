import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faHourglassHalf, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
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

  return (
    <section className="about-section">
      <div className="container-fluid">
        <motion.h2 className="about-title" data-aos="fade-up">
          About <span className="highlight">GWECCC 2025</span>
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
  <p data-aos="fade-left px-2">
    The <b>Global Water, Energy & Climate Change Congress (GWECCC)</b> 2025
    is an international event focused on sustainability, innovation,
    and global policy solutions. It brings together experts, policymakers, 
    and industry leaders to discuss the future of water, energy, and climate change resilience.
  </p>
  <p data-aos="fade-right px-2">
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
          <h2 data-aos="fade-up aboutdown">Event Starts In</h2>
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
  );
};

export default AboutPage;
