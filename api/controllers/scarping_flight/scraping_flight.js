// import puppeteer from "puppeteer";
import Scaping_Airline from "../../models/scrap/Scraping_Flight.js";
import axios from "axios";
import { JSDOM } from "jsdom";
import cheerio from "cheerio";
import Airline from "../../models/Flights/Airline.js";
import Flight from "../../models/Flights/Flight.js";

// export const createAirLineSQL = async (req, res, next) => {
//   try {
//     const AirLie = await Scaping_Airline.create(req.body);
//     return res.status(200).json(AirLie);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

//scrapeFlights
export const createAirLineSQL = async (req, res, next) => {
  try {
    // Replace with your actual HTML content or fetch it from a URL
    const htmlContent = await axios.get(
      "https://booking.kayak.com/flights/TUN-CAI/2024-08-31/2024-09-07?sort=price_a"
    ); // Update with your URL
    const dom = new JSDOM(htmlContent.data);
    const document = dom.window.document;

    // Extract flight data
    const flights = [];
    document.querySelectorAll(".flight").forEach((flightElement) => {
      const carrier = flightElement
        .querySelector(".col-field.carrier .bottom")
        .textContent.trim();
      const departTime = flightElement
        .querySelector(".col-field.time.depart .depart-time")
        .textContent.trim();
      const departAirport = flightElement
        .querySelector(".col-field.time.depart .bottom")
        .textContent.trim();
      const arrivalTime = flightElement
        .querySelector(".col-field.time.return .arrival-time")
        .textContent.trim();
      const arrivalAirport = flightElement
        .querySelector(".col-field.time.return .bottom")
        .textContent.trim();
      const duration = flightElement
        .querySelector(".col-field.duration .top")
        .textContent.trim();
      const stops = flightElement
        .querySelector(".col-field.stops .bottom.stops")
        .textContent.trim();

      flights.push({
        flightNumber: "", 
        airlineId: carrier, 
        originAirportId: departAirport, 
        destinationAirportId: arrivalAirport, 
        departureTime: departTime,
        arrivalTime: arrivalTime,
        duration: duration,
        price: 0,
        seatsAvailable: 0,
      });
    });

882029549904
    await Flight.insertMany(flights);
    await Scaping_Airline.bulkCreate(flights);

    return res.status(200).json(flights);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
