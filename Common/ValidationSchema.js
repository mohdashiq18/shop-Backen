const { sendResponse, NOT_ACCEPTABLE } = require("../Utility/StatusCode");

// Middleware function
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      
      return sendResponse(res,NOT_ACCEPTABLE,{ error: error.details[0].message });
    }
    next();
  };
};

module.exports={validateRequest}