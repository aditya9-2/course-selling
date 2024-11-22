import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../../models/user.model.js";
import { validateUserRegistration } from "../../validators/userValidation.js";


const userRegistration = async (req, res) => {


    const validateResult = validateUserRegistration(req.body);

    if (!validateResult) {
        return res.status(422).json({
            message: "Validation faield",
            error: validateResult.errors
        });
    }


    const { fullName, email, password } = req.body;

    try {

        if (!fullName) {
            return res.status(400).json({
                message: "fullname is required",
            });
        }

        if (!email) {
            return res.status(400).json({
                message: "Email is required",
            });
        }

        if (!password) {
            return res.status(400).json({
                message: "password is required",
            });
        }

        const isUser = await userModel.findOne({ email });

        if (isUser) {
            return res.status(409).json({
                message: "user aleady exists"
            });
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({
            fullName,
            email,
            password: hashedPassword
        });

        const accessToken = jwt.sign({
            id: user._id,
        }, process.env.USER_JWT_SECRET);

        return res.status(201).json({
            message: "User created succseefully",
            user: `welcome ${user.fullName}`,
            token: accessToken
        });

    } catch (err) {

        return res.status(500).json({
            message: "Internal server error",
            error: err
        });

    }
}

export default userRegistration;