import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarPage.css"; // Custom CSS
import nexus from "../../Logo/Nexus Logo.png";
import gw from "../../Logo/GWECCC Logo.jpeg";

const NavbarPage = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close menu on item click (Fixes issue)
  };

  return (
    <nav className={`navbar backgodnav fixed-top navbar-expand-lg ${navbarScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Left Logo */}
        <Link to="/" className="navbar-brand">
          <img 
            src={gw} 
            alt="GWECCC 2025" 
            className="logo-left" 
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-toggler black-toggle bg-white " 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse  ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item px-3"><Link className="nav-link" to="/" onClick={handleMenuClick}>Home</Link></li>
            <li className="nav-item px-3"><Link className="nav-link" to="#about" onClick={handleMenuClick}>About</Link></li>
            <li className="nav-item px-3"><Link className="nav-link" to="/Speakers" onClick={handleMenuClick}>Speakers & Agenda</Link></li>
            <li className="nav-item px-3"><Link className="nav-link" to="/Schedule" onClick={handleMenuClick}>Schedule</Link></li>
            <li className="nav-item px-3"><Link className="nav-link" to="/contact" onClick={handleMenuClick}>Contact</Link></li>
            <li className="nav-item px-3"><Link to="/register" className="btn appointment-btn nav-link px-4 " onClick={handleMenuClick}>Register</Link></li>
          </ul>
          <div className="d-flex align-items-center  d-block d-lg-none">
          <img 
            src={nexus} 
            alt="Nexus Logo" 
            className="text-center mx-5 mt-4 logo-right1"
            width={200}
          />
        </div>
        </div>

        {/* Right-Side Logo */}
        <div className="d-flex align-items-center d-none d-lg-block">
          <img 
            src={nexus} 
            alt="Nexus Logo" 
            className="logo-right"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
