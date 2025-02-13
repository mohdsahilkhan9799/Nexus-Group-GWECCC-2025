import React from 'react';
import './FooterPage.css'; // Custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import eventlogo from "../../Logo/Nexus Logo.png"

const FooterPage = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Logo & Address Section */}
        <div className="footer-section">
          <h2>
            <div className="logo-animation d-flex gap-5">
              <img 
                src="https://gweccc.com/assets/logo/main_logo/gweccc_white.png" 
                alt="GWECCC Logo" 
                width={130} 
                height={60} 
              />
            
            </div>
            GWECCC 2025
          </h2>
          <p>BNH Tower 4th Floor, Building 2491, Block 428, Road 2832, Bahrain</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="fas fa-phone"></i> Phone: +973 1751 1777</p>
          <p><i className="fas fa-envelope"></i> Email: nexus@gweccc2025.com</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            
          </div>

         
        </div>
        
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 GWECCC. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterPage;
