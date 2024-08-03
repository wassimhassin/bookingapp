import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useFetch from "../../hooks/useFetch";
// import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("https://booking-aku5.onrender.com/api/hotels?featured=true");

  return (
    <div className="fp grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10">
    {loading ? (
      "Loading"
    ) : (
      <>
        {data.map((item) => (
          <div className="fpItem border rounded-lg shadow-lg overflow-hidden flex flex-col" key={item._id}>
            <div className="fpImgContainer">
              <img src={item.photos[0]} alt="img" className="fpImg w-full h-48 object-cover" />
            </div>
            <div className="p-4 flex-grow">
              <div className="fpName text-lg font-semibold truncate">{item.name}</div>
              <div className="fpCity text-gray-600 truncate">{item.city}</div>
              <div className="fpPrice text-green-600 mt-2 truncate">
                Starting from {item.cheapesPrice} TND
              </div>
              {item.rating && (
                <div className="mt-4 flex items-center">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-full mr-2">
                    {item.rating}
                  </button>
                  <span className="text-gray-700">Excellent</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </>
    )}
  </div>
  );
};
export default FeaturedProperties;
