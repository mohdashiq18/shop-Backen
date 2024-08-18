const { hashPassword } = require("../../Common/PasswordHas");
const User = require("../../Modal/User");
const { sendResponse, ALREADY_REPORTED, CREATED, INTERNAL_SERVER_ERROR } = require("../../Utility/StatusCode");

const Regster = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            
            return sendResponse(res,ALREADY_REPORTED,existingUser,"User already exists");
        }
        const hashedPassword = await hashPassword(password);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone,
            isVendor: true
        });
        await newUser.save();
        return sendResponse(res,CREATED,newUser)
    } catch (err) {
        return sendResponse(res,INTERNAL_SERVER_ERROR,{})
    }
}

module.exports = { Regster };
