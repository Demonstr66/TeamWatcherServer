const express = require('express');
const app = new express()
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({message: "HELLO TEAMWATCHER FROM SERVER!"})
})

app.listen(PORT, () => {
  console.log(`app listen port: ${PORT}`)
})