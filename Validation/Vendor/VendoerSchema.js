const joi=require("joi")

const RegsterValidation=joi.object({
    name:joi.string().required(),
    email:joi.string().email().optional(),
    password:joi.string().required(),
    repeat_password:joi.ref('password'),
    phone:joi.string().required()

})

const LoginValidation=joi.object({ 
    email:joi.string().email().optional(),
    password:joi.string().required(),
    phone:joi.string().optional()

})




const addDeviceHistoryValidation = joi.object({
    deviceName: joi.string().required(),
    deviceImei: joi.array().items(joi.string()).required(),
    workHistroy: joi.array().items(
        joi.object({
            workType: joi.array().items(joi.string().required()).required(),
            workDate: joi.date().optional(),
            price: joi.number().optional()
        })
    ).required(),
    customerName: joi.string().required(),
    customerAadharNum: joi.string().optional(),
    customerAadharFront: joi.string().optional(),
    customerAadharBack: joi.string().optional(),
    customerConferenceVideo: joi.string().optional(),
    customerMobileNum: joi.string().required()
});

module.exports={RegsterValidation,LoginValidation,addDeviceHistoryValidation}