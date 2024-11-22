import express from "express";
import userRegistration from "../controllers/user/userRegistrationController.js";
import userLogin from "../controllers/user/userLoginController.js";
import getUserPurchases from "../controllers/user/getUserPurchases.js";
import userauthentication from "../middleware/userAuthTokenMiddleware.js";

const router = express.Router();


router.post('/user-registration', userRegistration);
router.post('/user-login', userLogin);
router.get('/user-purchases', userauthentication, getUserPurchases);


export default router;