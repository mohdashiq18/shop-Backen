const jwt = require('jsonwebtoken');
const dotenv=require("dotenv");
const { sendResponse, FORBIDDEN, UNAUTHORIZED } = require('../../Utility/StatusCode');
dotenv.config()
const KEY=process.env.secretKey

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
      jwt.verify(token, KEY, (err, user) => {
        if (err) {
           
          return  sendResponse(res,FORBIDDEN,{}); // Forbidden
        }
        req.user = user;
        console.log(req.user);
        if(req.user.vendor){
            next();
        }
        else{
          return sendResponse(res,UNAUTHORIZED,{})
        }
      });
    } else {
        return sendResponse(res,UNAUTHORIZED,{})
    }
  };


  module.exports={authenticateJWT}