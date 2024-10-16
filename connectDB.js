const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});

const getConnection = async () => {
  const connection = await pool.getConnection();
  console.log('Connected to database');
  return connection;
};

module.exports = {
  pool,
  getConnection,
};
