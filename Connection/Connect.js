const dotenv=require("dotenv")
const mongoose=require('mongoose')
dotenv.config();
const URL = process.env.MONGO_URL


const Connection=mongoose.connect(URL)

module.exports={Connection}