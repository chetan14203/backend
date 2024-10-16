const connection = require('../connectDB'); 


exports.createPickup = (req, res) => {
  const { mobileNumber, name, address, pickupDate, pickupTime } = req.body;

 
  const sql = 'INSERT INTO pickups (mobileNumber, name, address, pickupDate, pickupTime) VALUES (?, ?, ?, ?, ?)';

  connection.query(sql, [mobileNumber, name, address, pickupDate, pickupTime], (error, results) => {
    if (error) {
      console.error('Error inserting data:', error);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Pickup details received', id: results.insertId });
  });
};
