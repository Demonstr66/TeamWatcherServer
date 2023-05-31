const express = require('express');
const app = new express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('123')
  res.json({message: "HELLO TEAMWATCHER FROM SERVER!"})
})


app.get('/api/*', (req, res) => {
  console.log('fff')
  res.json({message: "HELLO TEAMWATCHER FROM SERVER API!"})
})

app.listen(PORT, () => {
  console.log(`app listen port: ${PORT}`)
})