import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phoneNo: { type: Number },
    role: { type: String },
    qualifications: { type: Array },
    specialization: { type: String },
    about: { type: String },
    averageRating: { type: Number, default: 0 },
    timeSlots: { type: Array },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }]
})

export default mongoose.model("Doctor", DoctorSchema);