import { z } from "zod";

const adminValidationSchema = z.object({

    fullName: z.string().min(2, "name should be minimum 2 characters ").max(30, "name maximum can contain 30 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "minimum 6 characters required").max(18, "ppassword maximum can contain 18 characters")
});

const adminLoginSchema = z.object({

    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "minimum 6 characters required").max(18, "ppassword maximum can contain 18 characters")
});

const createCourseSchema = z.object({

    title: z.string().min(3, "Title must be at least 3 characters long").max(100, "Title must be at most 100 characters long"),
    description: z.string().min(20, "Description must be at least 20 characters long").max(200, "Description must be at most 200 characters long"),
    price: z.number().min(0, "Must be a positive number").refine(val => !isNaN(val), "Invalid price format, price must be a number"),
    imageUrl: z.string().url("image must be an URL")

});

const validateAdminRegistration = (data) => {

    try {

        adminValidationSchema.parse(data);
        return {
            sucess: true

        }

    } catch (err) {

        return {
            success: false,
            error: err.errors.map(e => e.message).join(", ")
        }

    }
}

const validateAdminLogin = (data) => {
    try {

        adminLoginSchema.parse(data);
        return {
            success: true
        }

    } catch (err) {
        return {
            success: false,
            error: err.errors.map(e => e.message).join(", ")
        }
    }
}

const validateCreateCourse = (data) => {
    try {

        createCourseSchema.parse(data);

        return {
            successs: true,

        }

    }
    catch (err) {
        return {
            success: false,
            error: err.errors.map(e => e.message).join(", ")
        }
    }
}

export { validateAdminLogin, validateAdminRegistration, validateCreateCourse };