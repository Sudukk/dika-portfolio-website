"use client";
import React, { useState } from "react";

interface NavItems {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItems> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About Me",
    page: "about_me",
  },
  {
    label: "Projects",
    page: "personal_projects",
  },
  {
    label: "Work Experience",
    page: "work_experience",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 bg-black text-white fixed top-0 z-50">
      <div className="flex justify-between items-center py-4">
        <div className="font-bold text-xl">
          Wikandika's Portfolio
        </div>

        <nav className="hidden md:flex space-x-6">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.page}`}
              className="hover:text-gray-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setNavbar(!navbar)}
        >
          ☰
        </button>
      </div>

      {navbar && (
        <nav className="md:hidden bg-black text-white">
          <ul className="flex flex-col items-start p-4 space-y-4">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.page}`}
                  className="hover:text-gray-400"
                  onClick={() => setNavbar(false)} // Close menu on link click
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
