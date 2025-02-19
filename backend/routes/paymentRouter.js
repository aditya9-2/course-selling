import express from "express";
import userauthentication from "../middleware/userAuthTokenMiddleware.js";
import purchaseCourse from "../controllers/course/purchaseCourseController";
import confirmPayment from "../controllers/course/confirmPaymentController";

const router = express.Router();

router.post('/purchase-course', userauthentication, purchaseCourse);
router.post('/confirm-payment', userauthentication, confirmPayment);

export default router;