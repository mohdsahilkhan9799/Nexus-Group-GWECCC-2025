import React from 'react';
import './FooterPage.css'; // Create this CSS file for styling

const FooterPage = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
        <h2>
  <div className="logo-animation">
    <img src="https://gweccc.com/assets/logo/main_logo/gweccc_white.png" 
         alt="Logo" 
         width={130} 
         height={60} />
  </div>
  Magnaty Unisex Salon
</h2>

          <p>Near Yes Bank, Opposite Mcd Park, Chattarpur, Delhi</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: +91 9891251312</p>
          <p>Email: info@magnatysalon.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Magnaty Unisex Salon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterPage;
