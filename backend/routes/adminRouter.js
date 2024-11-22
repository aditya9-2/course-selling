import express from "express";
import adminRegistration from "../controllers/admin/adminResgistrationController.js";
import adminLogin from "../controllers/admin/adminLoginController.js";
import createCourse from "../controllers/admin/createCourseController.js";
import editCourse from "../controllers/admin/editCourseController.js";
import deleteCourse from "../controllers/admin/deleteCourseController.js";
import adminAuthentication from "../middleware/adminAuthenticationToken.js";

const router = express.Router();


router.post('/admin-registration', adminRegistration);
router.post('/admin-login', adminLogin);
router.post('/create-course', adminAuthentication, createCourse);
router.put('/edit-course/:courseId', adminAuthentication, editCourse);
router.delete('/delete-course/:courseId', adminAuthentication, deleteCourse);

export default router;