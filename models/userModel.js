const { DataTypes } = require('sequelize');
const sequelize = require('../connectDB');

const Pickup = sequelize.define('Pickup', {
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pickupDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  pickupTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

module.exports = Pickup;
