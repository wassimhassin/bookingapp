import React from "react";
import Search from "../../components/flight/search";
import Navbar from "../../components/navbar/Navbar";
import ListFlights from "../../components/flight/listFlights";
import FilterFlight from "../../components/flight/filterFlight";
import Icon_navigation from "../../components/icon_navigation"

const Flight = () => {
  return (
    <div>
      <Navbar />
      <Icon_navigation />
      <div className="container mx-auto px-8 ">
        <div className="grid md:grid-cols-5 grid-rows-5 gap-4">
          <div className="col-span-5">
            <Search />
          </div>
          <div className="md:row-span-4 md:col-start-1 md:row-start-2  row-start-2">
            <FilterFlight />
          </div>
          {/* <div className="col-span-4 row-span-4 row-start-2">
            <ListFlights />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Flight;
