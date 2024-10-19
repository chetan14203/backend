const { DataTypes } = require('sequelize');
const sequelize = require('../connectDB');

const Franchise = sequelize.define('Franchise', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicleNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Franchise;
