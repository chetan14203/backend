const { getConnection } = require('../connectDB'); 

exports.createPickup = async (req, res) => {
  const { mobileNumber, name, address, pickupDate, pickupTime } = req.body;
  const sql = 'INSERT INTO pickups (mobileNumber, name, address, pickupDate, pickupTime) VALUES (?, ?, ?, ?, ?)';
  let connection;
  try {
    connection = await getConnection();
    const [results] = await connection.query(sql, [mobileNumber, name, address, pickupDate, pickupTime]);
    res.status(201).json({ message: 'Pickup details received', id: results.insertId });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Database error' });
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

exports.franchise = async (req, res) => {
  const { name, address, mobileNumber, vehicleName, vehicleNumber } = req.body;

  try {
    const franchise = new Franchise({
      name,
      address,
      mobileNumber,
      vehicleName,
      vehicleNumber,
    });

    await franchise.save();
    res.status(201).send({ message: 'Franchise registered successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to register franchise' });
  }
};
