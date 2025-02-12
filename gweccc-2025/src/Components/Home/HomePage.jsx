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



const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); // Initialize AOS with smooth animation
    gsap.fromTo(".slider-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 });
  }, []);
 


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
    </>
  );
};

export default HomePage;
