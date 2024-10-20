import React from "react";

const reviews = [
  {
    name: "John Matthews",
    text: "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
    rating: 5,
  },
  {
    name: "Eunice Oliver",
    text: "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepify.",
    rating: 5,
  },
  {
    name: "Laura Davies",
    text: "It's a really good product and helps me sleep better at night!",
    rating: 5,
  },
  {
    name: "Jane Rocks",
    text: "Helps me relax and remember to breathe. Stress level definitely goes down.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className=" py-12">
      <div className="max-w-screen px-4 lg:px-32 md:px-24 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card flex flex-col justify-between p-6 shadow-sm rounded-lg text-left text-cardColor transition duration-300 hover:shadow-md space-y-4"
            >
              <p className="font-normal">{review.text}</p>
              <div className='mt-auto'>
              <h4 className="font-semibold">{review.name}</h4>
              <div className="text-green-500 mt-2">
                {"★".repeat(review.rating)}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
