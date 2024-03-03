import React from 'react';
import '../style.css';
const Header = () => {
  return (
    <header className="bg-black text-white py-4 header-global">
      <div className="container mx-auto flex items-center justify-between">
        {/* Search Bar */}
        <div className="flexitems-center">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-black search-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-6a8 8 0 11-16 0 8 8 0 0116 0z"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <div>Categories</div>
          <div>Website Builders</div>
          <div>Today's Deals</div>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
