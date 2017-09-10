const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello')
} );

app.get('/names/:name', (req, res) => {
  const name = req.params.name
  res.send(`Hello ${name}`)
  
})



app.listen(3000, () => {
  console.log('asdfasdf');
})
