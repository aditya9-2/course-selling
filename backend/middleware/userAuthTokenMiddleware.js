import jwt from "jsonwebtoken";

const userauthentication = (req, res, next) => {

    const authHeader = req.headers["authorization"] || req.headers["Authorization"];



    try {

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Access denied. No or Invalid token provided."
            });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.USER_JWT_SECRET);

        req.user = decoded;

        next();

    } catch (err) {

        if (err.name === "JsonWebTokenError") {
            return res.status(400).json({
                message: "Access denied. Invalid token."
            });
        }

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });
    }

}

export default userauthentication;