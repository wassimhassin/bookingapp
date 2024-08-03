import BookingFlight from "../models/Flights/BookingFlight.js";
import Flight from "../models/Flights/Flight.js";
import User from "../models/User.js";
import sendEmail from "../utils/Email.js";

export const createBookingFlight = async (req, res, next) => {
  const newBookingFlight = new BookingFlight(req.body);
  try {
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({
        message:
          "User Not Found , mast create account or signin in you account",
      });
    }
    const flight = await Flight.findById(req.body.flightId);
    if (!flight) {
      return res.status(404).json({ message: "Flight Not Found" });
    } else if (!newBookingFlight) {
      return res.status(404).json({ message: "Booking Flight Not Found" });
    }

    const email = "wassimhssin10@gmail.com";
    const emailSubject = "Booking Confirmation";
    const emailText = `Dear ${user.username},

    We are pleased to confirm your booking for flight ${flight.flightNumber} (${
      flight.airline
    }).
    
    Flight Details:
    - Flight Number: ${flight.flightNumber}
    - Airline: ${flight.airline}
    - Departure: ${flight.origin} at ${new Date(
      flight.departureTime
    ).toLocaleString()}
    - Arrival: ${flight.destination} at ${new Date(
      flight.arrivalTime
    ).toLocaleString()}
    - Duration: ${flight.duration} minutes
    - Price: $${flight.price.toFixed(2)}
    
    Thank you for choosing to fly with us. We look forward to providing you with an excellent travel experience.
    
    Best regards,
    Booking Team
    `;
    await sendEmail(email, emailSubject, emailText);

    const saveBookingFlight = await newBookingFlight.save();
    res.status(200).json(saveBookingFlight);
  } catch (err) {
    next(err);
  }
};

export const updateBookingFlight = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateBookingFlight = await BookingFlight.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateBookingFlight);
  } catch (err) {
    next(err);
  }
};

export const cancelBookingFlight = async (req, res, next) => {
  try {
    const { bookingId, userId } = req.body;

    // Find the booking
    const booking = await BookingFlight.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check if the booking belongs to the user
    if (booking.userId.toString() !== userId) {
      return res.status(403).json({ message: 'Unauthorized action' });
    }

    // Find the flight
    const flight = await Flight.findById(booking.flightId);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    // Assuming airline policy allows cancellation up to 24 hours before departure
/*
    // const cancellationAllowedPeriod = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    // const currentTime = new Date().getTime();
    // const departureTime = new Date(flight.departureTime).getTime();

    // if (departureTime - currentTime <= cancellationAllowedPeriod) {
    //   return res.status(400).json({ message: 'Cancellation not allowed within 24 hours of departure' });
    // }
*/
    // Update booking status to 'cancelled'
    booking.status = 'cancelled';
    await booking.save();

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send cancellation email
    const emailText = `Dear ${user.username},

    We are writing to confirm that your booking for flight ${flight.flightNumber} (${flight.airline}) has been cancelled.

    Flight Details:
    - Flight Number: ${flight.flightNumber}
    - Airline: ${flight.airline}
    - Departure: ${flight.origin} at ${new Date(flight.departureTime).toLocaleString()}
    - Arrival: ${flight.destination} at ${new Date(flight.arrivalTime).toLocaleString()}
    - Duration: ${flight.duration} minutes
    - Price: $${flight.price.toFixed(2)}

    If you have any questions or need further assistance, please contact our customer support team.

    Best regards,
    Booking Team
    `;

    await sendEmail(user.email, 'Booking Cancellation Confirmation', emailText);

    res.status(200).json({ message: 'Booking cancelled successfully' });
  } catch (err) {
    next(err);
  }
};
