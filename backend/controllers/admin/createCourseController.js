import courseModel from "../../models/course.model.js";
import { validateCreateCourse } from "../../validators/adminValidation.js";

const createCourse = async (req, res) => {


    const validateRessult = validateCreateCourse(req.body);

    if (!validateRessult) {
        return res.status(422).json({
            message: "Validation faield",
            error: validateRessult.errors
        })
    }

    const { title, description, price, imageUrl } = req.body;

    try {
        if (!title) {
            return res.status(400).json({
                message: "Title of the course is required",
            });
        }

        if (!description) {
            return res.status(400).json({
                message: "Description of the course is required",
            });
        }

        if (!price) {
            return res.status(400).json({
                message: "Price is required",
            });
        }

        if (!imageUrl) {
            return res.status(400).json({
                message: "Image URL is required",
            });
        }

        const isExistingCourse = await courseModel.findOne({ title });

        if (isExistingCourse) {
            return res.status(409).json({
                message: "course already exists",
            });
        }

        const course = await courseModel.create({
            adminId: req.admin.adminId,
            title,
            description,
            price,
            imageUrl
        });

        return res.status(201).json({
            message: "Course created successfully",
            course
        });

    } catch (err) {

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        })

    }

}

export default createCourse;