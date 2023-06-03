const express = require('express');
const app = new express()
const PORT = process.env.PORT || 3000;

const {Client} = require('pg')
console.log(Client)
const client = new Client({
  host: 'localhost',
  port: 35432,
  database: 'postgres',
  user: 'postgres',
  password: 'example',
})
client.connect()



app.get('/', (req, res) => {
  console.log('123')
  res.json({message: "HELLO TEAMWATCHER FROM SERVER!"})
})



app.get('/api/sql', async (req, res) => {
  try {
    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message) // Hello world!
  } catch (err) {
    console.error(err);
  } finally {
    await client.end()
  }
})


app.get('/api/*', (req, res) => {
  res.json({message: "HELLO TEAMWATCHER FROM SERVER API!"})
})

app.listen(PORT, () => {
  console.log(`app listen port: ${PORT}`)
})