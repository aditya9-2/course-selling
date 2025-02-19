import purchasesModel from "../../models/purchases.model.js";
import { verifyPayment } from "../../services/paymentService.js";
import courseModel from "../../models/course.model.js";



const confirmPayment = async (req, res) => {
    const { paymentDetails, courseId } = req.body;
    const userId = req.user.userId;


    try {
        // Verify the payment signature
        const isValidPayment = verifyPayment(paymentDetails);

        if (!isValidPayment) {
            return res.status(400).json({
                message: "Payment verification failed"
            });
        }

        // Check if the course already exists and is purchased
        const existingPurchase = await purchasesModel.findOne({ courseId, userId });

        if (existingPurchase) {
            return res.status(400).json({
                message: "You have already purchased this course"
            });
        }


        // Check if the course exists in the database
        const course = await courseModel.findById(courseId);

        const adminId = course.adminId;

        if (!adminId) {
            return res.status(400).json({
                message: "Admin ID not found for the course"
            });
        }

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }


        if (!paymentDetails.amount / 100) {
            return res.status(400).json({
                message: "Payment details are missing amount"
            });
        }

        // Create the purchase record
        const newPurchase = await purchasesModel.create({
            courseId,
            userId,
            adminId,
            transactionId: paymentDetails.razorpay_payment_id,
            price: paymentDetails.amount,
        });

        return res.status(201).json({
            message: "Payment confirmed and course purchased successfully",
            purchase: newPurchase,
        });

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });
    }
}

export default confirmPayment;
