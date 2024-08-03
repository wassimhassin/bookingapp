import mongoose from "mongoose";
const { Schema } = mongoose;

const PassengerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    passportNumber: {
      type: String,
      required: true,
    },
    seatNumber: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const BookingFlightSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    flightId: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
      required: true,
    },
    bookingDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    status: {
      type: String,
      required: true,
      enum: ['confirmed', 'cancelled'],
      default: 'confirmed',
    },
    passengers: [PassengerSchema],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
      enum: ['paid', 'pending'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['credit card', 'paypal'],
    },
  },
  { timestamps: true }
);

export default mongoose.model("BookingFlight", BookingFlightSchema);
