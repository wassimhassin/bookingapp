import React from "react";
import Search from "../../components/flight/search";
import Navbar from "../../components/navbar/Navbar";
import ListFlights from "../../components/flight/listFlights";
import FilterFlight from "../../components/flight/filterFlight";

const Flight = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-8 ">
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="col-span-5">
            <Search />
          </div>
          <div className="row-span-4 col-start-1 row-start-2">
            <FilterFlight />
          </div>
          <div className="col-span-4 row-span-4 row-start-2">
            <ListFlights />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
