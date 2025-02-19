import express from "express";
import userauthentication from "../middleware/userAuthTokenMiddleware.js";
import purchaseCourse from "../controllers/course/purchaseCourseController.js";
import confirmPayment from "../controllers/course/confirmPaymentController.js";

const router = express.Router();

router.post('/purchase-course', userauthentication, purchaseCourse);
router.post('/confirm-payment', userauthentication, confirmPayment);

export default router;