import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phoneNo: { type: Number },
    gender: { type: String, enum: ["male", "female", "other"] },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointments" }]
});

export default mongoose.model("User", UserSchema);