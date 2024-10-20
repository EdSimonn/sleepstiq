// import React from "react";

// const reviews = [
//   {
//     name: "Rochel Dill",
//     text: "Works great! Just use it and then relax. I fall asleep with no problem every time I use it.",
//     image: "/images/product-img.png",
//     rating: 5,
//   },
//   {
//     name: "Javier Mendez",
//     text: "It really helps me fall right to sleep compared to melatonin pills.",
//     image: "/images/product-img.png",
//     rating: 5,
//   },
//   {
//     name: "Naomi Nwazurike",
//     text: "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow I sleep like a baby now.",
//     image: "/images/product-img.png",
//     rating: 5,
//   },
//   {
//     name: "Nate Jacobs",
//     text: "I have been falling asleep faster and sleeping through the night better.",
//     image: "/images/product-img.png",
//     rating: 5,
//   },
// ];

// const ProductReviews = () => {
//   return (
//     <div className="bg-white py-12">
//       <div className="max-w-screen px-4 lg:px-32 md:px-24 lg:py-8 text-cardColor">
//         <h2 className="text-2xl font-bold mb-8 ">
//           Product Reviews
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="bg-white flex flex-col justify-between sm:px-6 px-10 sm:py-6 py-10 shadow-lg rounded-xs text-left "
//             >
//               <img
//                 src={review.image}
//                 alt={`Review by ${review.name}`}
//                 className="h-32 mx-auto mb-4"
//               />
//               <p className=" mb-4">{review.text}</p>
//               <div className="mt-auto">
//                 <h4 className="font-semibold">{review.name}</h4>
//                 <div className="text-green-500">
//                   {"★".repeat(review.rating)}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductReviews;


import React from "react";
import Image from "next/image"; // Import the Next.js Image component

const reviews = [
  {
    name: "Rochel Dill",
    text: "Works great! Just use it and then relax. I fall asleep with no problem every time I use it.",
    image: "/images/product-img.png",
    rating: 5,
  },
  {
    name: "Javier Mendez",
    text: "It really helps me fall right to sleep compared to melatonin pills.",
    image: "/images/product-img.png",
    rating: 5,
  },
  {
    name: "Naomi Nwazurike",
    text: "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow I sleep like a baby now.",
    image: "/images/product-img.png",
    rating: 5,
  },
  {
    name: "Nate Jacobs",
    text: "I have been falling asleep faster and sleeping through the night better.",
    image: "/images/product-img.png",
    rating: 5,
  },
];

const ProductReviews = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-screen px-4 lg:px-32 md:px-24 lg:py-8 text-cardColor">
        <h2 className="text-2xl font-bold mb-8">Product Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between sm:px-6 px-10 sm:py-6 py-10 shadow-lg rounded-xs text-left"
            >
              <Image
                src={review.image}
                alt={`Review by ${review.name}`}
                width={128} // Specify the width
                height={128} // Specify the height
                className="h-32 mx-auto mb-4"
              />
              <p className="mb-4">{review.text}</p>
              <div className="mt-auto">
                <h4 className="font-semibold">{review.name}</h4>
                <div className="text-green-500">
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

export default ProductReviews;

