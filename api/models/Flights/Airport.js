import mongoose from "mongoose";

// const CoordinatesSchema = new mongoose.Schema(
//   {
//     latitude: {
//       type: Number,
//       required: true,
//     },
//     longitude: {
//       type: Number,
//       required: true,
//     },
//   },
//   { _id: false }
// );

const AirportSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
    // coordinates: {
    //   type: CoordinatesSchema,
    //   required: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Airport", AirportSchema);
