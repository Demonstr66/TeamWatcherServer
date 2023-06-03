const express = require('express');
const app = new express()
const PORT = process.env.PORT || 3000;

const {Pool} = require('pg')
const pool  = new Pool({
  host: 'db',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'example',
})



app.get('/', (req, res) => {
  console.log('123')
  res.json({message: "HELLO TEAMWATCHER FROM SERVER!"})
})



app.get('/api/sql', async (req, res) => {
  pool.query('SELECT NOW()', (err, r) => {
    if (err) {
      console.error('Ошибка выполнения запроса', err);
    } else {
      console.log('Результат запроса', r.rows);
      res.json(JSON.stringify(r))
    }
  });
})


app.get('/api/*', (req, res) => {
  res.json({message: "HELLO TEAMWATCHER FROM SERVER API!"})
})

app.listen(PORT, () => {
  console.log(`app listen port: ${PORT}`)
})