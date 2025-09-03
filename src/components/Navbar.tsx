import React, { useState } from "react";
import logo from "../assets/luxury-watches.webp";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50">
      {/* First Row: Logo + Search + Login/Sign Up */}
      <div className="flex justify-between items-center py-2 px-6 bg-[#014a2b]">
        {/* Logo */}
        <div className="flex gap-2">
          <img className="w-[42px]" src={logo} />
          <h1 className="text-2xl pt-2 font-bold text-[#f6dd92]">
            Luxury Watches
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-1/2 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="pl-4 pr-4 py-2 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#deab51] w-full"
          />
        </div>

        {/* Login / Sign Up */}
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full bg-[#f6dd92] text-[#014a2b] font-semibold hover:bg-[#f6dd92] transition">
            Login
          </button>
          <button className="px-4 py-2 rounded-full border border-[#f6dd92] text-[#f6dd92] font-semibold hover:bg-[#f6dd92] hover:text-[#014a2b] transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-1 border-[#deab51]" />

      {/* Second Row: Navigation Links */}
      <div className="flex justify-center gap-8 py-2 bg-[#014a2b]">
        {["Home", "Catalog", "Contact", "About Us"].map((link) => (
          <a
            key={link}
            className="text-[#f6dd92] hover:bg-white/70 hover:text-[#014a2b] px-4 py-2 rounded transition-colors duration-300 cursor-pointer"
          >
            {link}
          </a>
        ))}
      </div>
    </header>
  );
};
