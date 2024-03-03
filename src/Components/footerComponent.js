import React from 'react';
import '../style.css';


const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="bg-black text-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 footer-global container">
        <div className="container mx-auto flex flex-wrap justify-between space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
          {/* Categories */}
          <div className="footer-column w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-4">
              Categories
            </h3>
            <ul className="list-none p-0" style={{ listStyleType: "none" }}>
              {/* Add your category links here */}
              <li>Web Builder</li>
              <li>Hosting</li>
              <li>Data Center</li>
              <li>Robotic Automation</li>
              {/* Add more categories as needed */}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-4">
              Contact
            </h3>
            <ul className="list-none p-0" style={{ listStyleType: "none" }}>
              {/* Add your contact links here */}
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
              <li>Categories</li>
              <li>About</li>
              {/* Add more contact options as needed */}
            </ul>
          </div>

          {/* Country Dropdown */}
          <div className="footer-column w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-4">
              Country
            </h3>
            <select className="bg-gray-800 text-white p-2 rounded focus:outline-none">
              <option value="us">US</option>
              <option value="india">India</option>
              {/* Add more country options as needed */}
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
    