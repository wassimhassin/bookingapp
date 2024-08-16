import React, { useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  fontstyleFlightList,
  fontstyleFlightListColor,
  styleTime,
} from "../../layout/styles";
import { fetchFlights } from "../../redux/flight/flightThunks";

const ListFlights = () => {
  var skeletonCount = 10;

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(fetchFlights());
    console.log(data);
    if (error) {
      dispatch(error);
    }
  }, [dispatch]);

  const formatTime = (dateTimeString) => {
    const timePart = dateTimeString.split("T")[1];
  };

  return (
    <div className="container mx-auto px-8 py-6">
      <div className="max-w-4xl mx-auto">
        {loading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <div
                key={index}
                className="relative flex flex-col w-full animate-pulse gap-2 p-4 border-b"
              >
                <div className="h-6 w-12 rounded-full bg-slate-400" />
                <div className="flex-1">
                  <div className="mb-1 h-3 w-3/5 rounded-lg bg-slate-400 text-lg" />
                  <div className="h-2 w-[90%] rounded-lg bg-slate-400 text-sm" />
                </div>
              </div>
            ))
          : data.map((flight) => (
              <div
                className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border-b "
                key={flight._id}
              >
                <div className="col-span-4 flex flex-col md:flex-row justify-around items-center cursor-pointer transition hover:scale-105 hover:bg-gray-200 duration-300">
                  <img
                    src={flight.airlineId.logoUrl}
                    alt="Airline logo"
                    className="rounded-full w-16 md:w-24"
                  />
                  <div className="flex flex-col items-center md:items-center">
                    <strong style={fontstyleFlightList}>
                      {flight.departureTime} AM
                    </strong>
                    <strong style={fontstyleFlightListColor}>
                      {flight.originAirportId.code}
                    </strong>
                  </div>

                  <strong className="hidden md:block">
                    ____________________
                  </strong>
                  <div className="flex flex-col items-center md:items-center">
                    <strong style={fontstyleFlightList}>
                      {flight.arrivalTime} AM
                    </strong>
                    <strong style={fontstyleFlightListColor}>
                      {flight.destinationAirportId.code}
                    </strong>
                  </div>
                  <strong style={styleTime}>
                    {/*{(flight.duration / 60).toFixed(0)}h {flight.duration % 60}m*/}
                    {flight.duration}
                  </strong>
                </div>

                <div className="col-start-1 md:col-start-5 ">
                  <strong className="p-5"> {flight.price} DT</strong>

                  <div>
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      className="bg- hover:bg-gray-400 text-gray-800 font-bold py-5 px-7 rounded-xl inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
                    >
                      View...
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        {error && <div className="text-red-500">Error: {error}</div>}
      </div>
    </div>
  );
};

export default ListFlights;
