const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const hotelInfo = require('./data/hotelData.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('welcome to our burj al arab')
});

app.get('/hotel-info', (req, res) => {
    res.send(hotelInfo)
})

app.listen(port, () => {
    console.log('port is running in ', port)
})
