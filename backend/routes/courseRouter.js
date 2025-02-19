import express from "express";


import userauthentication from "../middleware/userAuthTokenMiddleware.js";
import adminAuthentication from "../middleware/adminAuthenticationToken.js"
import getAllAdminCourses from "../controllers/course/getAllAdminCourseController.js";
import getAlluserCourses from "../controllers/course/getAllUserscoursesController.js";
import previewCourses from "../controllers/course/previewCoursesController..js";
import getCourseDetails from "../controllers/course/getCourseDetailsController.js";


const router = express.Router();

router.get('/preview-Courses', previewCourses);
router.get('/get-course-details/:id', getCourseDetails);
router.get('/all-user-courses', userauthentication, getAlluserCourses);
router.get('/all-admin-courses', adminAuthentication, getAllAdminCourses);




export default router;