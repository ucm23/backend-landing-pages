const express = require("express");
const cors = require('cors');
const app = express()
const path = require("path");
const port = /*process.env.PORT ||*/ 3001;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

const recibirCorreos = require('./src/routes/get-email');

app.use(require('./src/routes/index'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/get-email', (req, res) => {
    recibirCorreos();
    res.send('Recibiendo correos...');
});

app.get('/', (req, res) => {
    res.send('api...');
});


//setInterval(recibirCorreos, 60000);

app.listen(port, () => {
    console.log("🚀 ~ app.listen ~ port", port)
})