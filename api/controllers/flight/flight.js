import Flight from "../../models/Flights/Flight.js";

export const createFlight = async (req, res, next) => {
  const newFlight = new Flight(req.body);
  try {
    if (!newFlight) {
      return res.status(400).json({ message: "Invalid Flight Data" });
    } else if (newFlight.departureTime < new Date()) {
      return res.status(400).json({
        message:
          "Invalid Departure Time. Departure Time should be in the future",
      });
    } else if (newFlight.arrivalTime < newFlight.departureTime) {
      return res.status(400).json({
        message:
          "Invalid arrivalTime Time. arrivalTime Time should be upper than departureTime",
      });
    } else if (!newFlight.airlineId) {
      res.send({ message: "Airline ID is required" });
    } else if (!newFlight.originAirportId) {
      res.send({ message: "Origin Airport ID is required" });
    } else if (!newFlight.destinationAirportId) {
      res.send({ message: "Destination Airport ID is required" });
    }
    const saveFlight = await newFlight.save();
    res.status(200).json(saveFlight);
  } catch (err) {
    next(err);
  }
};

export const getAllFlight = async (req, res, next) => {
  try {
    const getFlight = await Flight.find()
      .populate("airlineId")
      .populate("originAirportId")
      .populate("destinationAirportId")
      .sort({ price: 1 });
    res.status(200).json(getFlight);
  } catch (err) {
    next(err);
  }
};

export const getFlightById = async (req, res, next) => {
  const { id } = req.body;
  try {
    const getFlight = await Flight.findById(id);
    res.status(200).json(getFlight);
  } catch (error) {
    next(error);
  }
};

export const getLowerPriceFlight = async (req, res, next) => {
  try {
    const lowerPriceFlight = await Flight.find().sort({ price: 1 }).limit(1);
    res.status(200).json(lowerPriceFlight[0].price);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateFlightById = async (req, res, next) => {
  const { id } = req.body;
  try {
    const updateFlight = await Flight.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateFlight);
  } catch (error) {
    next(error);
  }
};

export const deleteFlightById = async (req, res, next) => {
  const { id } = req.body;
  try {
    await Flight.findByIdAndDelete(id);
    res.status(200).json("Flight has been deleted");
  } catch (error) {
    next(error);
  }
};
