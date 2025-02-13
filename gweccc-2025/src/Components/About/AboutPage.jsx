import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const calculateTimeLeft = () => {
    const eventDate = new Date("February 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : {};
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
      <div className="container">
        {/* 🌍 Title */}
        <motion.h2 className="title" data-aos="fade-up">
          About GWECCC 2025
        </motion.h2>

        {/* 📜 About Content */}
        <div className="about-content">
          {/* Left Side: Text Content */}
          <motion.div
            className="text-content"
            data-aos="fade-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p>
              <b>Global Water, Energy & Climate Change Congress (GWECCC)</b>{" "}
              2025 is an international platform bringing together sustainability
              leaders, policymakers, and innovators to discuss water, energy,
              and climate resilience.
            </p>
            <p>
              <b>Kingdom of Bahrain</b> will host this transformative event on{" "}
              <b>February 14, 2025</b>. Get ready for expert panels, policy
              discussions, and networking opportunities.
            </p>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="image-container"
            data-aos="fade-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4D22AQHzubosTcY6Lg/feedshare-shrink_800/feedshare-shrink_800/0/1694847418586?e=2147483647&v=beta&t=474dHgcMPcT6wiXFgRvEGsKx6pArscT5lq398k2K-a8"
              alt="GWECCC Event"
              className="event-image"
            />
          </motion.div>
        </div>

        {/* ⏳ Countdown Timer */}
        <motion.div className="countdown" data-aos="fade-up">
          <h2>Event Starts In</h2>
          <div className="timer">
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <motion.div key={index} className="time" data-aos="flip-up">
                <span>{timeLeft[unit] || "00"}</span> {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🎯 Key Highlights */}
        <div className="highlights-section">
          <h3 className="highlight-title" data-aos="fade-up">Key Highlights</h3>
          <div className="highlights-grid">
            {[
              "🌍 Global Sustainability Discussions",
              "💡 Energy Innovation & Green Technologies",
              "📢 Expert Panels & Keynote Speeches",
              "🌿 Climate Action Strategies",
              "🤝 Networking with Global Leaders",
            ].map((highlight, index) => (
              <motion.div key={index} className="highlight-card" data-aos="flip-left">
                <h4>{highlight}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🎤 Speakers Section */}
        <motion.div className="speakers-section" data-aos="fade-up">
          <h3>Meet Our Speakers</h3>
          <div className="speakers-grid">
            {[1, 2, 3].map((num) => (
              <div className="speaker-card" key={num} data-aos="flip-up">
                <img src={`https://via.placeholder.com/150?text=Speaker+${num}`} alt={`Speaker ${num}`} />
                <h4>Speaker {num}</h4>
                <p>Expert in Renewable Energy</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 📅 Agenda Section */}
        <motion.div className="agenda-section" data-aos="fade-up">
          <h3>Agenda</h3>
          <p>Discover sessions, panels, and workshops curated for GWECCC 2025.</p>
          <button className="cta-button">View Full Agenda</button>
        </motion.div>

        {/* 🔥 Call to Action */}
        <motion.div className="cta-section" data-aos="fade-up">
          <h3>Join the Movement!</h3>
          <p>Reserve your spot today and be a part of the change.</p>
          <button className="cta-button">Register Now</button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
