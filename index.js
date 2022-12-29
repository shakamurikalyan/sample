const express = require('express')
const app = express()
const port = 6969

app.get('/', (req, res) => {
  res.send('Hello World! starting')
  console.log('ping')
})
app.get('/error', (req, res) => {
  res.send('jai balayya , exiting');
  console.log('exiting')
  process.exit(1);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})