import React, { useState } from "react";
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
    <section className="contact-section">
      <div className="container">
        <h2 className="title" data-aos="fade-up">Get in Touch</h2>

        <div className="contact-content">
          {/* Left Side: Contact Information */}
          <div className="contact-info" data-aos="fade-right">
            <h3>Contact Information</h3>
            <p><i className="fas fa-map-marker-alt"></i> Address: Road 2832, BNH Tower 4th Floor – Building 2491 – Block 428, Bahrain</p>
            <p><i className="fas fa-envelope"></i> nexus@gweccc2025.com</p>
            <p><i className="fas fa-phone"></i> +973 1751 1777</p>

            {/* Google Maps Embed */}
            <div className="map-container" data-aos="fade-up">
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

        <div className="map-container" data-aos="fade-up">
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
  );
};

export default ContactPage;
