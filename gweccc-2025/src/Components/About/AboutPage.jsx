import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

 

  return (
   <h1>dd</h1>
  );
};

export default ContactPage;
