const express = require('express');
const cors = require('cors');
require('dotenv').config();
const corsOptions = require('./config/corsOptions');
const port = process.env.SHOP_PORT;
const app = express();

const users = require('./modules/users');
const items = require('./modules/items');

app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}));

app.get("/",function (req, res) {
    return res.status(200).send({
        message: "Shop project by CoconutWave25"
    });
});

app.use("/users", users.route);
app.use("/items", items.route);

app.listen(port, function () {
   console.log("Shop application listening to port "+port); 
});