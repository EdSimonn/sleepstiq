import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductReviews from "./components/ProductReview";
import Reviews from "./components/Review";

export default function Home() {
  return (
    <div className="relative z-0"> {/* Keep this z-index lower to avoid overlap issues */}
    {/* Navbar */}
    <Navbar />

    <div
      className="relative w-full bg-cover bg-center flex justify-left items-start"
      style={{ backgroundImage: "url('/images/home-hero.png')" }}
    >
      {/* Main hero section */}
      <div className="text-left text-primary z-10 max-w-screen-xl p-4 lg:py-20 lg:px-32 md:px-24 my-28">
        <p className="text-lg mb-4 lg:w-4/5 font-semibold">We're here to help you</p>
        <h1 className="md:text-6xl text-4xl font-bold leading-tight">Relax & Rest</h1>
        <p className="text-lg mt-4 lg:w-4/5 font-semibold">
          With the aid of our technology, Sleepstiq can ensure you that you can get quality sleep.
        </p>
        <button className="mt-6 px-12 py-3 bg-btn text-white font-semibold rounded-lg hover:bg-red-600">
          Visit Shop
        </button>
      </div>
    </div>

      {/* Logos Section Overlapping the Hero Section */}
      <div className="relative w-full flex justify-end items-center -mt-12">
        <div className="hidden sm:flex bg-white shadow-lg rounded-lg py-8 px-8 w-10/12 max-w-screen-lg justify-between items-center">
          {/* Add logos in flex */}
          <img src="/images/google.png" alt="Google" className="w-32 h-auto" />
          <img src="/images/forbes.png" alt="Forbes" className="w-32 h-auto" />
          <img
            src="/images/bloomberg.png"
            alt="Bloomberg"
            className="w-32 h-auto"
          />
          <img
            src="/images/sleep-review.png"
            alt="Sleep Review"
            className="w-32 h-auto"
          />
          <img
            src="/images/influencive.png"
            alt="Influencive"
            className="w-32 h-auto"
          />
        </div>
      </div>

      <section className="py-16 text-primary">
        <div className="max-w-screen px-4 lg:px-32 md:px-24 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center lg:justify-between sm:gap-24 gap-0">
            {/* Left Text Section */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h3 className="text-sm uppercase tracking-wide mb-2">
                Our Amazing Story
              </h3>
              <h2 className="text-4xl font-bold mb-4">10k+ Happy Customers</h2>
              <p className="text-secondary mb-6">
                There’s no secret sauce, no wizard behind the curtain. What
                makes Aerolab tick is an interdisciplinary team with a framework
                that fosters candid collaboration.
              </p>
              <a href="#" className=" font-semibold text-xl hover:underline">
                More know About us
              </a>
            </div>

            {/* Right Testimonial Section */}
            <div className="lg:w-1/2 bg-card shadow-lg px-8 sm:px-12 py-8 sm:py-16 rounded-lg text-cardColor">
              <p className="italic mb-6 sm:text-xl text-lg">
                "I’m a very anxious person but use this and feel so relaxed and
                sleep way better now with the aid of sleepstiq."
              </p>

              {/* Testimonial Author */}
              <div className="flex items-center">
                <img
                  src="/images/customer-img.png"
                  alt="James Miller"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">James Miller</p>
                  <p className="">CEO, Techbics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Reviews />
      </section>

      <div className="max-w-screen px-4 lg:px-32 md:px-24 lg:py-8">
        <div className="flex flex-col sm:flex-row items-center lg:justify-between sm:gap-24 gap-8">
          <div className="relative lg:w-1/2 sm:w-1/2 mb-12 lg:mb-0">
            <img
              // src="/images/shop-product.png"
              src="/images/customer-prdot.png"
              alt="Product"
              className="w-[85%] sm:w-full"
            />
            <div className="absolute -bottom-10 sm:-right-10 right-0 bg-white rounded-lg shadow-lg p-4 sm:pr-24 pr-8 text-sm">
              <ul className="space-y-1 w-sm">
                <li className="flex items-start">
                  <span className="text-yellow-500">&#128522;</span>
                  <span className="ml-2">Promotes calm and relaxation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500">&#128164;</span>
                  <span className="ml-2">
                    Inhalation allows for a rapid effect.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500">&#9989;</span>
                  <span className="ml-2">
                    100% drug-free, plant-based ingredients <br /> 3rd-party lab
                    tested.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 sm:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-primary">Shop Now</h2>
            <p className="text-secondary mb-6">
              Our Personal Diffuser is an aromatherapy device that contains a
              blend of melatonin, lavender, and chamomile. A few breaths of our
              plant-based essential oil mist will mellow you out, quiet the
              mind, and lull you to bed.
            </p>
            <button className="mt-4 px-12 py-3 bg-btn text-white font-semibold rounded-lg hover:bg-red-600">
              Visit Shop
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto py-16">
        <div className="max-w-screen pl-4 lg:pl-32 md:pl-24 lg:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center items-left sm:justify-between sm;gap-0 gap-8 text-secondary">
            {/* Text Section */}
            <div className="lg:w-1/2 sm:w-1/2 max-w-lg md:pr-2 pr-16 space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="">
                We started Sleepstiq with 1 simple goal: to be your best friend
                at bedtime. We, just like you, deal with stress, unease, and
                trouble sleeping from a number of daily things like school,
                work, screens, numbers, and people. That’s why we created
                products that aim to –
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500">&#x2713;</span>
                  <span className="ml-2">Promote Calm</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">&#x2713;</span>
                  <span className="ml-2">Support Sleep</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">&#x2713;</span>
                  <span className="ml-2">Reduce Stress</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">&#x2713;</span>
                  <span className="ml-2">Aid Relaxation</span>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 sm:w-1/2 w-full">
              <img
                src="/images/mission-img.png"
                alt="Person Relaxing"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Visit Our Shop Section */}
        <div className="text-center mt-16">
          <div className="max-w-screen px-4 lg:px-0 md:px-0 lg:py-8 text-secondary">
            <h2 className="text-3xl font-bold text-primary">Visit Our Shop</h2>
            <p className="mx-auto mt-4 sm:w-3/5 w-full">
              Our Personal Diffuser is an aromatherapy device that contains a
              blend of melatonin, lavender, and chamomile. A few breaths of our
              plant-based essential oil mist will mellow you out, quiet the
              mind, and lull you to bed.
            </p>
            <button className="mt-6 px-12 py-3 bg-btn text-white font-semibold rounded-lg hover:bg-red-600">
              Visit Shop
            </button>
          </div>
        </div>
      </div>

      <ProductReviews />
      <Footer />
    </div>
  );
}
