import Razorpay from "razorpay";
import crypto from "crypto";

import dotenv from "dotenv"
dotenv.config();



const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_ID_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});


const createOrder = async (amount, currency = "INR") => {
    try {
        const order = await razorpayInstance.orders.create({
            amount: amount * 100,
            currency,
            receipt: `receipt_${Date.now()}`
        });
        return order;
    } catch (err) {

        throw new Error(`Failed to create Razorpay order: ${err.message}`);

    }
}

const verifyPayment = (paymentDetails) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = paymentDetails;

    const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

    // console.log(`generatedSignature: ${generatedSignature}`);

    if (generatedSignature === razorpay_signature) {
        return true;
    } else {
        throw new Error("Payment verification failed");
    }
}

export { createOrder, verifyPayment };