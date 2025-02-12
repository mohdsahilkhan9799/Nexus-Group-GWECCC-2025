import React from 'react';
import NavbarPage from './Header/NavbarPage';
import Footer from './Footer/FooterPage';

const MainUtiles = ({ children }) => {
  return (
    <div>
      {/* Render the Navbar */}
      <NavbarPage />

      {/* Main content area */}
      <main
        style={{
          minHeight: 'calc(100vh - 100px)', // Ensure full-page height
        }}
      >
        {children}
      </main>

      {/* Render the Footer */}
      <Footer />
    </div>
  );
};

export default MainUtiles;
