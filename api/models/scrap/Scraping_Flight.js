import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("booking_scraping", "root", null, {
  host: "127.0.0.1",
  dialect: "mysql",
});

const Scaping_Airline = sequelize.define('Flight', {
    carrier: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    departAirport: {
        type: DataTypes.STRING,
        allowNull: false
    },
    arrivalTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    arrivalAirport: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stops: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
//   Airline.belongsTo(ContactInformation, { foreignKey: 'contactInformationId', as: 'contactInformation' });
//   ContactInformation.hasOne(Airline, { foreignKey: 'contactInformationId' });

export const syncDatabase = async () => {
  await sequelize.sync({ force: false }); // Set to true if you want to drop and recreate tables (use with caution)
};

export default Scaping_Airline;
