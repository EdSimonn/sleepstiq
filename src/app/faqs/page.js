import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Faqs = () => {
  return (
    <div>
      <div className="relative">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="relative h-full w-full bg-cover bg-center flex items-center justify-left bg-faqBg text-primary">
          <div className="w-full max-w-screen ss:p-10 p-4 py-40 xs:py-40 md:py-40 sm:py-44 lg:px-32 md:px-24">
            {/* Added width and padding here */}
            <div className="text-left w-full max-w-lg">
              {/* Centering the inner content */}
              <p className="text-sm  mb-2">
                We’re here to help you
              </p>
              <h1 className="sm:text-5xl text-3xl font-bold  mb-6">
                How can we assist?
              </h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs here"
                  className="w-full py-3 px-4 pl-12 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  {/* Search Icon */}
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35M15 11a6 6 0 11-12 0 6 6 0 0112 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Footer/>
    </div>
  );
};

export default Faqs;
