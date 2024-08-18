const jwt = require('jsonwebtoken');
const dotenv=require("dotenv")
dotenv.config()
const KEY=process.env.secretKey


const GenerateToken= async(user)=>{
    const token = jwt.sign(user, KEY, { expiresIn: '30d' });
    return token
}

module.exports={GenerateToken}
