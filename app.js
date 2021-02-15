const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


const mongoose = require("mongoose");
require('./models/User');
const uri = "mongodb://localhost/jwt";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection is done");
});

const UserRouter = require("./routes/routerUser");
app.use("/", UserRouter);
const BookRouter = require("./routes/bookrouter");
app.use("/book", BookRouter);



app.listen(5000, () => console.log('Server started on port 5000'));