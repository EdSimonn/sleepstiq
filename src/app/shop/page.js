'use client'

import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Review from "../components/Review";

export default function Shop() {
  const [numberValue, setNumberValue] = useState(2); // Initialize with the value 2

  const handleInputChange = (e) => {
    setNumberValue(e.target.value); // Update state when the input changes
  };

  return (
    <div>
      <div className="relative">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}

        <div
          className="relative w-full bg-cover bg-center flex justify-left items-start"
          style={{ backgroundImage: "url('/images/shop-hero.png')" }}
        >
          <div className="text-left text-primary z-10 max-w-screen-xl p-4 py-24 lg:py-40 lg:px-32 md:px-24 my-28">
            <p className="text-lg mb-4 lg:w-4/5 font-semibold">
              We're here to help you
            </p>
            <h1 className="md:text-6xl text-4xl font-bold leading-tight">
              Relax & Rest
            </h1>
          </div>
        </div>
      </div>
      <section className="bg-white py-8">
        <div className="max-w-screen px-4 lg:px-32 md:px-24 lg:py-8">
          <div className="px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Product Image Section */}
            <div className="w-full md:w-1/2">
              <div className="p-4">
                <img
                  src="/images/customer-prdo.png"
                  alt="Sleepstiq Personal Melatonin Diffuser"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Product
              </h2>
              <p className="text-gray-600 mb-6">
                Our Personal Diffuser is an aromatherapy device that contains a
                blend of melatonin, lavender, and chamomile. A few breaths of
                our plant-based essential oil mist will mellow you out, quiet
                the mind, and lull you to bed.
              </p>

              {/* Benefits List */}
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">&#128522;</span>{" "}
                  Promotes calm and relaxation.
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">&#128164;</span>{" "}
                  Inhalation allows for a rapid effect.
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">&#9989;</span> 100%
                  drug-free, plant-based ingredients 3rd-party lab tested.
                </li>
              </ul>

              {/* Pricing and Quantity Section */}
              <div className="flex items-center space-x-4 gap-4 mb-6">
                <div>
                  <p className="text-gray-800 font-semibold">Price</p>
                  <p className="text-xl font-bold">USD 50</p>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="quantity"
                    className="text-gray-800 font-semibold"
                  >
                    Unit
                  </label>
                  {/* <select id="quantity" className="border rounded-md px-2 py-1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select> */}
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={numberValue}
                    onChange={handleInputChange} // Add onChange handler
                  />{" "}
                </div>
              </div>

              {/* Buy Button */}
              <button className="bg-btn text-white px-16 py-2 rounded-sm font-semibold hover:bg-red-600 transition duration-300">
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>

<Review/>

      <Footer/>
    </div>
  );
}
