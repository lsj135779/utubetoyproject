const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.REACT_APP_DB_USER,
    password: process.env.REACT_APP_DB_PASSWORD,
    database: "utube",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  "production": {
    "username": process.env.REACT_APP_DB_USER,
    "password": process.env.REACT_APP_DB_PASSWORD,
    "database": "utube",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
