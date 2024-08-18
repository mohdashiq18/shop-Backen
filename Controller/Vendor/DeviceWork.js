
const Device = require('../../Modal/Device');
const DeviceHestroy = require('../../Modal/DeviceHestroy');
const { sendResponse, CREATED, INTERNAL_SERVER_ERROR, OK } = require('../../Utility/StatusCode');

const addDeviceHistory = async (req, res) => {
    try {
        const {
            deviceName,
            deviceImei,
            workHistroy,
            customerName,
            customerAadharNum,
            customerAadharFront,
            customerAadharBack,
            customerConferenceVideo,
            customerMobileNum
        } = req.body;

        let device = await Device.findOne({ deviceImei: { $in: deviceImei } });
console.log(req.user);

        if (!device) {
            device = new Device({
                deviceName,
                deviceImei
            });
            await device.save();
        }

        const newDeviceHistory = new DeviceHestroy({
            deviceId: device._id,
            vendorId:req.user._id,
            workHistroy,
            customerName,
            customerAadharNum,
            customerAadharFront,
            customerAadharBack,
            customerConferenceVideo,
            customerMobileNum
        });

        await newDeviceHistory.save();
return sendResponse(res,CREATED,newDeviceHistory,"Device history added successfully")
        
    } catch (err) {
       return sendResponse(res,INTERNAL_SERVER_ERROR,{})
       
    }
};


const getDeviceHistory = async (req, res) => {
    try {
        const vendorId = req.user._id;

        const deviceHistories = await DeviceHestroy.find({ vendorId }).populate('deviceId');

        if (!deviceHistories || deviceHistories.length === 0) {
            return res.status(404).json({ message: "No device history found for this vendor" });
        }
return sendResponse(res,OK,deviceHistories,"Device histories retrieved successfully")
       
    } catch (err) {
        return sendResponse(res,INTERNAL_SERVER_ERROR,{})
    }
};








module.exports = { addDeviceHistory,getDeviceHistory};
