import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Course", courseSchema);