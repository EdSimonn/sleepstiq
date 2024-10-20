"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to apply bold styling for active link
  const getLinkClass = (path) => {
    return pathname === path
      ? "font-bold text-xl"
      : "font-normal text-xl";
  };

  return (
    <nav className="w-full absolute top-0 left-0 z-50 flex items-center sm:justify-start justify-between px-6 py-3 text-primary max-w-screen ss:p-10 p-4 lg:py-8 lg:px-32 md:px-24">
      {/* Logo on the left */}
      <Link href="/" className={getLinkClass("/")}>
      <div className="flex items-center">
        <Image
          src="/images/nav-logo.png"
          alt="hero-logo"
          width={100}
          height={50}
        />
      </div>
      </Link>


      {/* Desktop menu */}
      <ul className="hidden sm:flex space-x-10 ml-2 lg:ml-24 flex-wrap">
        <li>
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className={getLinkClass("/about")}>
            About
          </Link>
        </li>
        <li>
          <Link href="/shop" className={getLinkClass("/shop")}>
            Shop
          </Link>
        </li>
        <li>
          <Link href="/faqs" className={getLinkClass("/faqs")}>
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
                <Link href="/" className={getLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li className="cursor-pointer text-white hover:text-btn">
                <Link href="/" className={getLinkClass("/about")}>
                  About
                </Link>
              </li>
              <li className="cursor-pointer text-white hover:text-btn">
                <Link href="/shop" className={getLinkClass("/shop")}>
                  Shop
                </Link>
              </li>
              <li className="cursor-pointer text-white hover:text-btn">
                <Link href="/faqs" className={getLinkClass("/faqs")}>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
