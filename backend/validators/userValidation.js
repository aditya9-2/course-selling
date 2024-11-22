import { z } from "zod";

const userValidateSchema = z.object({

    fullName: z.string().min(2, "name should be minimum 2 characters ").max(30, "name maximum can contain 30 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "minimum 6 characters required").max(18, "ppassword maximum can contain 18 characters")
});

const userLoginValidation = z.object({

    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "minimum 6 characters required").max(18, "ppassword maximum can contain 18 characters")
});

const validateUserRegistration = (data) => {

    try {

        userValidateSchema.parse(data);
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

const validateUserLogin = (data) => {
    try {

        userLoginValidation.parse(data);
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


export { validateUserRegistration, validateUserLogin };