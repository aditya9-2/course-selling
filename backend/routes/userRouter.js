import express from "express";
import userRegistration from "../controllers/user/userRegistrationController.js";
import userLogin from "../controllers/user/userLoginController.js";


const router = express.Router();


router.post('/user-registration', userRegistration);
router.post('/user-login', userLogin);



export default router;