const express = require('express');
const app = new express()
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/user.routes')


app.use(express.json())
app.use('/api', userRoutes)


app.get('/', (req, res) => {
  res.json({message: "HELLO TEAMWATCHER FROM SERVER!"})
})


app.get('/api/*', (req, res) => {
  res.json({message: "HELLO TEAMWATCHER FROM SERVER API!"})
})

app.listen(PORT, () => {
  console.log(`app listen port: ${PORT}`)
})