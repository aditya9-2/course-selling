import adminModel from "../../models/admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const adminLogin = async (req, res) => {

    const { email, password } = req.body;

    try {

        if (!email) {
            return res.status(400).json({
                message: "email is required",
            });
        }

        if (!password) {
            return res.status(500).json({
                message: "password is required"
            });
        }

        const admin = await adminModel.findOne({ email });

        if (!admin) {
            return res.status(404).json({
                message: "Admin doesn't exists"
            });
        }

        const isMatchedPassword = await bcrypt.compare(password, admin.password);

        if (!isMatchedPassword) {
            return res.status(401).json({
                message: "Wrong Password"
            });
        }

        const accessToken = jwt.sign({
            adminId: admin._id,
        }, process.env.ADMIN_JWT_SECRET)


        return res.status(200).json({
            message: "Login successfull",
            email,
            accessToken
        });

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });

    }

}

export default adminLogin;