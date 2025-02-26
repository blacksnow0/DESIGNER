"use client";

import { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

export default function Navbar({ handleVisibility = () => {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50  text-white transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <h3 className="text-xl font-bold tracking-widest">DESIGNER</h3>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-x-12 text-xs tracking-wider">
            {["Menu", "Dropdown", "More"].map((title, index) => (
              <li key={index} className="relative group">
                <button className="hover:text-gray-100 font-semibold flex items-center gap-1 focus:outline-none">
                  {title} <MdKeyboardArrowDown size={20} />
                </button>
                <ul className="absolute left-0 mt-2 w-40 border border-gray-700 bg-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {["This", "That", "Another"].map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li>
              <a href="#" className="hover:text-gray-100 font-semibold">
                This
              </a>
            </li>
            <li>
              <button
                onClick={handleVisibility}
                className="hover:text-gray-100 font-semibold"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Login Button (Desktop) */}
        <button className="px-4 py-2 text-xs font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition hidden lg:block">
          Log in
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black text-white z-40 flex flex-col items-start pt-20 px-8 space-y-6 text-lg transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-[-100%] opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-5 right-5 text-3xl"
        >
          <MdClose />
        </button>

        {/* Navigation Menu */}
        <ul className="w-full space-y-4">
          {["Menu", "Dropdown", "More"].map((title, index) => (
            <li key={index} className="w-full">
              {/* Dropdown Button */}
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === index ? null : index)
                }
                className="flex items-center justify-between w-full py-3 px-4 rounded-lg bg-gray-800 hover:bg-gray-700"
              >
                <span>{title}</span>
                <MdKeyboardArrowDown
                  size={20}
                  className={`transition-transform ${
                    dropdownOpen === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`overflow-hidden transition-transform duration-300 ease-out ${
                  dropdownOpen === index
                    ? "scale-y-100 opacity-100 h-auto"
                    : "scale-y-0 opacity-0 h-0"
                } origin-top`}
              >
                <ul className="text-sm bg-gray-900 rounded-lg mt-2 p-2 space-y-2">
                  {["This", "That", "Another"].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="block py-2 px-4 rounded-md hover:bg-gray-700 transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}

          {/* Standard Links */}
          <li>
            <a
              href="#"
              className="block py-2 px-4 bg-gray-900 rounded-md hover:text-gray-700"
            >
              This
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 bg-gray-900 rounded-md hover:text-gray-700"
            >
              contact
            </a>
          </li>
        </ul>

        {/* Login Button */}
        <button className="px-6 py-3 bg-white w-full text-black rounded-lg font-semibold hover:bg-gray-300 transition">
          Log in
        </button>
      </div>
    </header>
  );
}
