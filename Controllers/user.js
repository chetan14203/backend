const { getConnection } = require('../connectDB'); // Import the getConnection function

// Controller to handle pickup creation
exports.createPickup = async (req, res) => {
  const { mobileNumber, name, address, pickupDate, pickupTime } = req.body;

  // SQL query to insert pickup details
  const sql = 'INSERT INTO pickups (mobileNumber, name, address, pickupDate, pickupTime) VALUES (?, ?, ?, ?, ?)';

  let connection;
  try {
    // Get a connection from the pool
    connection = await getConnection();
    
    // Execute the query using the connection
    const [results] = await connection.query(sql, [mobileNumber, name, address, pickupDate, pickupTime]);

    // Respond with success message and the inserted ID
    res.status(201).json({ message: 'Pickup details received', id: results.insertId });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Database error' });
  } finally {
    // Release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
};

