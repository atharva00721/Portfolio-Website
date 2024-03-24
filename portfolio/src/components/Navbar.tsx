import { useEffect, useState } from "react";
// import "./Navbar.css"; // Import your CSS file for Navbar styling

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener to handle scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`z-40 flex justify-between fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white mt-5 rounded-2xl px-5 py-4 shadow-md w-5/6 transition-all duration-300 ${
        scrolled ? "bg-blue-900" : ""
      }`}
    >
      <div className="p-1">
        <h4 className="text-pink-500 uppercase tracking-wide font-bold">
          Hello
        </h4>
      </div>
      <div className="p-1">
        <ul className="flex justify-around">
          <li>
            <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
              Home
            </h5>
          </li>
          <li>
            <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
              About Me
            </h5>
          </li>
          <li>
            <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
              Portfolio
            </h5>
          </li>
          <li>
            <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
              Contact
            </h5>
          </li>
        </ul>
      </div>
    </nav>
  );
}
