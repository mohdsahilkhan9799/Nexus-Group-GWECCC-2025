import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../Contact/ContactPage.css";

const ContactPage = () => {
    
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
    <div>
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
    </div>
  );
}

export default ContactPage;
