const express = require('express');
const app = express()

const port = process.env.PORT || '3000'

app.listen(port)

app.use( (req, res, next) => {
  console.log(req.url + "-" + new Date());
})



app.get('/', (req, res) => {
  res.render('hello', {name: "milooo"})
} );

app.get('/names/:name', (req, res) => {
  const name = req.params.name
  res.render('Hello', { name: name})

})

app.set('view engine', 'hbs');

app.listen(port, () => {
  console.log('asdfasdf');
})
