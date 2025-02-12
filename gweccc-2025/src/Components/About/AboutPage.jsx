import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

 

  return (
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
  );
};

export default ContactPage;
