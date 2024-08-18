const bcrypt = require('bcrypt');
const dotenv = require("dotenv");
dotenv.config();

const SALT = process.env.SALT;
const SALTROUNDS = parseInt(process.env.SALTROUNDS, 10);

async function hashPassword(plainPassword) {
    try {
        const hash = await bcrypt.hash(plainPassword + SALT, SALTROUNDS);
        console.log('Hashed password:', hash);
        return hash;  // Return the string directly
    } catch (err) {
        console.error(err);
        throw err;  // Re-throw the error to handle it in the calling function
    }
}


async function comparePassword(plainPassword, hash) {
    try {
        const match = await bcrypt.compare(plainPassword + SALT, hash);
        if (match) {
            return match
        } else {
            return match
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports = { hashPassword, comparePassword };
