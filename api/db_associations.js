import Airline from './models/Flights/Airline.js';
import Airport from './models/Flights/Airport.js';
import Flight from './models/Flights/Flight.js';

// Define associations
Airline.hasMany(Flight, { foreignKey: 'airlineId' });
Flight.belongsTo(Airline, { foreignKey: 'airlineId' });

Airport.hasMany(Flight, { foreignKey: 'originAirportId', as: 'originFlights' });
Flight.belongsTo(Airport, { foreignKey: 'originAirportId', as: 'originAirport' });

Airport.hasMany(Flight, { foreignKey: 'destinationAirportId', as: 'destinationFlights' });
Flight.belongsTo(Airport, { foreignKey: 'destinationAirportId', as: 'destinationAirport' });

// Export all models
export { Airline, Airport, Flight };

