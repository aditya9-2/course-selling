import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    transactionId: { type: String, required: true },
    purchaseDate: { type: Date, default: Date.now },
    price: { type: Number, required: true }
});

export default mongoose.model("Purchases", purchaseSchema);
