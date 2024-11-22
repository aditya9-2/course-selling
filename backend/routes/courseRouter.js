import express from "express";

import purchaseCourse from "../controllers/course/purchaseCourseController.js";
import userauthentication from "../middleware/userAuthTokenMiddleware.js";
import adminAuthentication from "../middleware/adminAuthenticationToken.js"
import getAllAdminCourses from "../controllers/course/getAllAdminCourseController.js";
import getAlluserCourses from "../controllers/course/getAllUserscoursesController.js";
import previewCourses from "../controllers/course/previewCoursesController..js";
import confirmPayment from "../controllers/course/confirmPaymentController.js";


const router = express.Router();

router.get('/preview-Courses', previewCourses);
router.get('/all-user-courses', userauthentication, getAlluserCourses);
router.get('/all-admin-courses', adminAuthentication, getAllAdminCourses);
router.post('/purchase-course', userauthentication, purchaseCourse);
router.post('/confiirm-payment', userauthentication, confirmPayment);


export default router;