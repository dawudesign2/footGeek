const express = require('express')
const app = express()
const path = require('path')
const port = 8000
const cors = require('./middleware/corsMiddleware')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/', express.static('data')); // to serve static files  
app.use(cors); 

app.get('/', (req, res) => {
    res.location('/api/')
    res.sendFile(path.join(__dirname, 'api', 'data.json'))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})