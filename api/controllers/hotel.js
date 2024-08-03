import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import CryptoJS from 'crypto-js';

export const CreatHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (err) {
    next(err);
  }
};

export const UpdateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (err) {
    next(err);
  }
};

export const DeleteHotel = async (req, res, next) => {
  try {
    const deleteHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been deleted!");
  } catch (err) {
    next(err);
  }
};

export const GetHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (err) {
    next(err);
  }
};
// export const GetAllHotels = async (req,res,next)=>{
//     try{
//         const getHotel = await Hotel.find(req.query).limit(req.query.limit);
//         res.status(200).json(getHotel);
//     }catch(err){
//         return(err);
//     }
// }

export const GetAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const getAllHotel = await Hotel.find({
      ...others,
      cheapesPrice: { $gt: min | 1, $lt: max || 999999 },
    }); // &limit=Number of Hotels
    res.status(200).json(getAllHotel);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

//HotelCount
export const GetHotelCount = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments();
    res.status(200).json({ count: hotelCount });
  } catch (err) {
    next(err);
  }
};

//   export const getHotelRooms = async (req, res, next) => {
//     try {
//       const hotel = await Hotel.findById(req.params.id);
//       const list = await Promise.all(
//         hotel.rooms.map(async (room) => {
//           const roomDetails = await Room.findById(room);
//           const reservationDetails = await Reservation.findOne({
//             Room: room,
//             hotel: hotel._id,
//           }).populate("username", "phone");

//           return {
//             Room: roomDetails,
//             Reservation: reservationDetails,
//           };
//         })
//       );

//       res.status(200).json(list);
//     } catch (err) {
//       next(err);
//     }
//   };

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByCityName = async (req, res, next) => {
  const cityName = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cityName.map((city) => {
        return Hotel.find({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const getAllHotelByCountry = async (req, res, next) => {
  const { city } = req.body;
  try {
    const getAllHotel = await Hotel.find({ city: city });
    if (!getAllHotel) {
      return res.status(404).json({ message: "No Hotel Found" });
    }
    res.status(200).json({ getAllHotel });
  } catch (err) {
    next(err);
  }
};

// export const allHotels = async (req, res, next) => {
//   const { page = 1, limit = 7 } = req.query;
//   const skip = (page - 1) * limit;

//   try {
//     const hotels = await Hotel.find().skip(skip).limit(parseInt(limit));
//     if (!hotels || hotels.length === 0) {
//       return res.status(404).json({ message: "No hotels found" });
//     }
//     res.status(200).json(hotels);
//   } catch (err) {
//     next(err);
//   }
// };

export const allHotels = async (req, res, next) => {
  const { page = 1, limit = 7 } = req.query;
  const skip = (page - 1) * limit;

  try {
    const hotels = await Hotel.find().skip(skip).limit(parseInt(limit));
    if (!hotels || hotels.length === 0) {
      return res.status(404).json({ message: "No hotels found" });
    }
    const encryptedResponse = CryptoJS.AES.encrypt(JSON.stringify(hotels), process.env.secretKey).toString();
    res.status(200).json({ data: encryptedResponse });
  } catch (err) {
    next(err);
  }
};  