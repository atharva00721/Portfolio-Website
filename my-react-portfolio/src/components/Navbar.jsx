import React, { useEffect, useState } from "react";
import "./Navbar.css"; // Import your CSS file for Navbar styling

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="Logo">
        <h4>Hello</h4>
      </div>
      <div className="Navlinks">
        <ul>
          <li>
            <h5>Home</h5>
          </li>
          <li>
            <h5>About</h5>
          </li>
          <li>
            <h5>Portfolio</h5>
          </li>
          <li>
            <h5>Contact</h5>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
