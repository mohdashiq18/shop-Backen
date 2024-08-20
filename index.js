const express = require('express')
const dotenv = require("dotenv");
const { Connection } = require('./Connection/Connect');
const { Router } = require('./Routes/Vendor/Regster');
const crypto = require('crypto');
const port = process.env.PORT || 3000
const app = express()
app.use(express.json());
app.use("/vendor",Router)
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.listen(port, async () => {
    try {
       await Connection
        console.log(`server is running PORT ${port}`);
    }
    catch {
        console.log("Connection Error");
    }
}) 
