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

 

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (event, id) => {
    event.preventDefault();
    setIsMenuOpen(false); // Close menu on item click

    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Adjust this if your navbar height is different
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
    <nav className={`navbar backgodnav fixed-top navbar-expand-lg ${navbarScrolled ? "navbar-scrolled" : ""}`}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Left Logo */}
          <Link to="/" className="navbar-brand">
            <img src={gw} alt="GWECCC 2025" className="logo-left" id="home" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler black-toggle bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-3"><a className="nav-link" href="#" onClick={(e) => handleMenuClick(e, "home")}>Home</a></li>
              <li className="nav-item px-3"><a className="nav-link" href="#" onClick={(e) => handleMenuClick(e, "about")}>About</a></li>
              <li className="nav-item px-3"><a className="nav-link" href="#" onClick={(e) => handleMenuClick(e, "speakers")}>Speakers & Agenda</a></li>
              <li className="nav-item px-3"><a className="nav-link" href="#" onClick={(e) => handleMenuClick(e, "schedule")}>Schedule</a></li>
              <li className="nav-item px-3"><a className="nav-link" href="#" onClick={(e) => handleMenuClick(e, "contact")}>Contact</a></li>
              <li className="nav-item px-3"><Link to="/register" className="btn appointment-btn nav-link px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</Link></li>
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
            <img src={nexus} alt="Nexus Logo" className="logo-right" />
          </div>
        </div>
      </nav>


    {/* modal login*/}
    <div
  className="modal fade my-5"
  id="exampleModal"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content modaltrs">
      <button
        type="button"
        className="btn-close ms-auto px-4 pt-3"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
      <div
        className="container d-flex justify-content-center align-items-center"
      >
        <div
          className="p-4"
          style={{
            maxWidth: "400px",
            width: "75%",
            border: "1px solid white",
            animation: "modalEnter 0.6s ease",
          }}
        >
          <div className="card-body text-center">
            <div className="">
              <i
                className="feather icon-user-plus auth-icon"
                style={{ fontSize: "2rem", color: "#007bff" }}
              ></i>
            </div>
            <h3 className="mb-4">Log In</h3>
            <form>
              <div className="mb-3">
                <input
                  name="email"
                  type="email"
                  id="formBasicEmail"
                  className="form-control"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  name="password"
                  type="password"
                  id="formBasicPassword"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Sign In
              </button>
            </form>
            <p className="mb-5 text-muted">
              Don’t have an account?{" "}
              <a href="/signup" className="text-primary">
              <i class="fa-solid fa-eye"></i>              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* modal */}
    </>
  );
};

export default NavbarPage;
