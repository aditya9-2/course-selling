import courseModel from "../../models/course.model.js";
import purchasesModel from "../../models/purchases.model.js";
import { createOrder } from "../../services/paymentService.js";

const purchaseCourse = async (req, res) => {

    const { courseId } = req.body;
    const userId = req.user.userId;

    try {

        if (!courseId) {
            return res.status(400).json({
                message: "Course ID is required"
            });
        }

        const course = await courseModel.findById(courseId);

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        const existingPurchase = await purchasesModel.findOne({ courseId, userId });

        if (existingPurchase) {
            return res.status(400).json({
                message: "You have already purchased this course"
            })
        }

        // now it's time to create razorpay order
        const order = await createOrder(course.price);

        return res.status(201).json({
            message: "Payment initiated successfully",
            orderId: order.id,
            amount: order.amount,
            currency: order.currency
        });

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        })
    }

};


export default purchaseCourse;
