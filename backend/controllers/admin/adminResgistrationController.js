import adminModel from "../../models/admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const adminRegistration = async (req, res) => {

    const { fullName, email, password } = req.body;

    try {

        if (!fullName) {
            return res.status(400).json({
                messgae: "Full name is required",

            });
        }

        if (!email) {
            return res.status(400).json({
                messgae: "Full name is required",

            });
        }

        if (!password) {
            return res.status(400).json({
                messgae: "Full name is required",

            });
        }

        const isAdmin = await adminModel.findOne({ email });

        if (isAdmin) {
            return res.status(409).json({
                message: "admin already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const admin = await adminModel.create({
            fullName,
            email,
            password: hashedPassword
        });

        const accessToken = jwt.sign({
            id: admin._id,
        }, process.env.ADMIN_JWT_SECRET);

        return res.status(201).json({
            message: "Admin created succseefully",
            user: `welcome ${admin.fullName}`,
            token: accessToken
        });



    } catch (err) {

        return res.status(500).json({
            message: "internal server error",
            error: err
        });
    }

}

export default adminRegistration;