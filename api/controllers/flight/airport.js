import Airport from "../../models/Flights/Airport.js";

export const createAirport = async (req, res, next) => {
    const newAirport = new Airport(req.body);
  try {
    const saveAirport = await newAirport.save();
    res.status(200).json(saveAirport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to update an existing airport by ID
export const updateAirport = async (id, updateData) => {
  try {
    const updatedAirport = await Airport.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Validate the update operation
    });
    if (!updatedAirport) {
      return new Error("Airport not found");
    }
    return updatedAirport;
  } catch (error) {
    return new Error("Error updating airport: " + error.message);
  }
};

// Function to find an airport by ID
export const findAirportById = async (id) => {
  try {
    const airport = await Airport.findById(id);
    if (!airport) {
      throw new Error("Airport not found");
    }
    return airport;
  } catch (error) {
    throw new Error("Error finding airport: " + error.message);
  }
};

// Function to find all airports
export const findAllAirports = async () => {
  try {
    const airports = await Airport.find();
    return airports;
  } catch (error) {
    throw new Error("Error finding airports: " + error.message);
  }
};

// Function to delete an airport by ID
export const deleteAirport = async (id) => {
  try {
    const deletedAirport = await Airport.findByIdAndDelete(id);
    if (!deletedAirport) {
      throw new Error("Airport not found");
    }
    return deletedAirport;
  } catch (error) {
    throw new Error("Error deleting airport: " + error.message);
  }
};
