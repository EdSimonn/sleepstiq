"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full absolute top-0 left-0 z-50 flex items-center sm:justify-start justify-between px-6 py-3 text-primary max-w-screen ss:p-10 p-4 lg:py-8 lg:px-32 md:px-24">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Image
          src="/images/nav-logo.png"
          alt="hero-logo"
          width={100}
          height={50}
        />
      </div>

      {/* Desktop menu */}
      <ul className="hidden sm:flex space-x-10 ml-2 lg:ml-24 flex-wrap">
        <li>
          <Link href="/" className="font-bold text-xl">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="font-normal text-xl">
            About
          </Link>
        </li>
        <li>
          <Link href="/shop" className="font-normal text-xl">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/faqs" className="font-normal text-xl">
            FAQs
          </Link>
        </li>
      </ul>

      {/* Hamburger menu for small screens */}
      <div className="block sm:hidden relative text-primary z-50">
        <button className="focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <span className="text-2xl">
              <MdClose />
            </span> // Close button
          ) : (
            <span className="text-2xl">
              <RxHamburgerMenu />
            </span> // Open button
          )}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-6 -right-5 mx-4 my-2 bg-primary p-6 rounded-xl shadow-lg z-50">
            <ul className="list-none flex flex-col items-start">
              <li className="cursor-pointer text-white hover:text-btn">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer text-white hover:text-btn">
                <Link href="/">About</Link>
              </li>
              <li className="cursor-pointer text-white hover:text-btn">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="cursor-pointer text-white hover:text-btn">
                <Link href="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
