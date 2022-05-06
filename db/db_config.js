const Pool = require("pg").Pool;
require("dotenv").config();

const env = process.env.NODE_ENV || "Dev";

let connection = {};

connection = {
  connectionString: process.env.DB_DATABASE_URI,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(connection);

module.exports = pool;
