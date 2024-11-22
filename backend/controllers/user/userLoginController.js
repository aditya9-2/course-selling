import bcrypt from "bcryptjs";
import userModel from "../../models/user.model.js";
import jwt from "jsonwebtoken";
import { validateUserLogin } from "../../validators/userValidation.js";

const userLogin = async (req, res) => {

    const validateResult = validateUserLogin(req.body);

    if (!validateResult) {
        return res.status(422).json({
            message: "Validation faield",
            error: validateResult.errors
        });
    }
    const { email, password } = req.body;

    try {
        if (!email) {
            return res.status(400).json({
                message: "Email is required",
            });
        }

        if (!password) {
            return res.status(400).json({
                message: "Password is required",
            });
        }

        const isUser = await userModel.findOne({ email });

        if (!isUser) {
            return res.status(404).json({
                message: "User does not exist"
            });
        }
        const isMatchedPassword = await bcrypt.compare(password, isUser.password);

        if (!isMatchedPassword) {
            return res.status(401).json({
                message: "Wrong password"
            });
        }

        // Generate JWT token
        const accessToken = jwt.sign(
            {
                userId: isUser._id,
            }, process.env.USER_JWT_SECRET);

        return res.status(200).json({
            message: "Login successful",
            email,
            accessToken
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });
    }
};

export default userLogin;
