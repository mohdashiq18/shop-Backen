const { GenerateToken } = require("../../Common/LoginToken");
const {  comparePassword } = require("../../Common/PasswordHas");
const User = require("../../Modal/User");
const { sendResponse, ALREADY_REPORTED, CREATED, UNAUTHORIZED, NOT_FOUND, OK, INTERNAL_SERVER_ERROR } = require("../../Utility/StatusCode");

const Login = async (req, res) => {
    try {
        const {  email, password, phone } = req.body;
        const existingUser = email?await User.findOne({ email }):await User.findOne({ phone });
        if (!existingUser) {
            
            return sendResponse(res,NOT_FOUND,{});
        }
        const ComparePassword = await comparePassword(password,existingUser.password);
    if(!ComparePassword){
        return sendResponse(res,UNAUTHORIZED,{})
    }
      const Token=await GenerateToken({_id:existingUser._id,name:existingUser.name,email:existingUser.email,vendor:existingUser.isVendor})
        return sendResponse(res,OK,{Token})
    } catch (err) {
        return sendResponse(res,INTERNAL_SERVER_ERROR,{})
    }
}

module.exports = { Login };
