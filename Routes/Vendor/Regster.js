const express=require("express");
const { Regster } = require("../../Controller/Vendor/Regster");
const { validateRequest } = require("../../Common/ValidationSchema");
const { RegsterValidation, LoginValidation } = require("../../Validation/Vendor/VendoerSchema");
const { Login } = require("../../Controller/Vendor/Login");
const { addDeviceHistory, getDeviceHistory } = require("../../Controller/Vendor/DeviceWork");
const { authenticateJWT } = require("../../Validation/Vendor/TokenValidation");
const Router =express.Router();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

Router
.post("/regster",validateRequest(RegsterValidation),Regster)
.post("/login",validateRequest(LoginValidation),Login)

Router
.post('/deviceadd',authenticateJWT,addDeviceHistory)
.get("/devicehistroy",authenticateJWT,getDeviceHistory)
module.exports={Router}