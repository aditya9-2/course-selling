import jwt from "jsonwebtoken";

const adminAuthentication = (req, res, next) => {

    const authHeader = req.headers["authorization"] || req.headers["Authorization"];


    try {

        if (!authHeader || !authHeader.startsWith("Bearer ")) {

            return res.status(401).json({
                message: "Access denied. No or invalid token provided."
            })
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.ADMIN_JWT_SECRET);

        req.admin = decoded;

        next();

    } catch (err) {

        if (err.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: "Access denied. Invalid token."
            });
        }

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });
    }

}

export default adminAuthentication;