const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001

// Configure CORS to accept the custom 'token' header used for auth
// Configure CORS to accept the custom 'token' header used for auth and allow cookies
// app.use(cors({
//     origin: true,
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'token', 'Authorization'],
//     exposedHeaders: ['token']
// }));
app.use(cors());
// app.options('*', cors());
// Make sure cookies are visible to the client
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

app.use(bodyParser.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello World! Server Backend đang chạy.');
});


routes(app);

mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log('Connect Db success')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(port, () => {
    console.log('Server is running in port: ', port);
});