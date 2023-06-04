const {Pool} = require('pg')

const pool  = new Pool({
  host: 'db',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

module.exports = pool