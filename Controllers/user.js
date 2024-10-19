const Franchise = require('../models/franchise');
const Pickup = require('../models/userModel');


exports.createPickup = async (req, res) => {
  const { mobileNumber, name, address, pickupDate, pickupTime } = req.body;

  try {
   
    const newPickup = await Pickup.create({
      mobileNumber,
      name,
      address,
      pickupDate,
      pickupTime,
    });

  
    res.status(201).json({ message: 'Pickup details received', id: newPickup.id });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Database error' });
  }
};


exports.franchise = async (req, res) => {
  const { name, address, mobileNumber, vehicleName, vehicleNumber } = req.body;

  try {
    const newFranchise = await Franchise.create({
      name,
      address,
      mobileNumber,
      vehicleName,
      vehicleNumber,
    });
    res.status(201).send({ message: 'Franchise registered successfully!', id: newFranchise.id });
  } catch (error) {
    console.error('Error registering franchise:', error);
    res.status(500).send({ error: 'Failed to register franchise' });
  }
};