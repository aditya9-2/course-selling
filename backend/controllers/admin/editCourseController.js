import courseModel from "../../models/course.model.js";

const editCourse = async (req, res) => {

    const { courseId } = req.params;

    const { title, description, price, imageUrl } = req.body;

    const { adminId } = req.admin;

    try {

        if (!courseId) {
            return res.status(400).json({
                message: "Course ID is required"
            });
        }

        const findCourse = await courseModel.findById(courseId);

        if (!findCourse) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        if (findCourse.adminId.toString() !== adminId) {

            return res.status(403).json({
                message: "Unauthorized. You are not allowed to edit this course"
            });
        }

        // I can update using updateOne() also but the proble when i try to return the updated course, it's only giving the 
        // acknowledegement. where as bu using findByIdAndUpdate() gives me the updated course also
        const updatedCourse = await courseModel.updateOne({
            _id: courseId,
        }, {
            title,
            description,
            price,
            imageUrl
        }, {
            // by giving this i can see the updated course
            new: true
        });

        /**
         * OR WE CAN USE THIS LOGIC AS WELL FOR FINDING THE COURSE
         * // Update course details
                course.title = title || course.title;
                course.description = description || course.description;
                course.price = price || course.price;
                course.imageUrl = imageUrl || course.imageUrl;
        
                await course.save();
        
         */

        if (!updatedCourse) {
            return res.statu(400).json({
                message: "course is not updated yet"
            });
        }

        res.status(200).json({
            message: "Course updated successfully",
            course: updatedCourse
        });

    } catch (err) {

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        })

    }

}

export default editCourse;