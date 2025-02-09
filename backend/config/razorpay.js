const Razorpay = require("razorpay");


exports.instance = new Razorpay({
    key_id: process.env.REZORPAY_KEY ,
    key_secret: process.env.RAZORPAY_SECRET,
});