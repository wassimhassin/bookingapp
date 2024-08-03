import Airline from "../../models/Flights/Airline.js";

export const createAirLine = async (req, res, next) => {
    const newAirLine = new Airline(req.body);
  try {
    const saveAirLine = await newAirLine.save();
    res.status(200).json(saveAirLine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

