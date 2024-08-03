import mongoose from "mongoose";

const ContactInformationSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { _id: false }
);

const AirlineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    code: {
      type: String,
      unique: true,
    },
    logoUrl: {
      type: String,
    },
    contactInformation: {
      type: ContactInformationSchema,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Airline", AirlineSchema);
