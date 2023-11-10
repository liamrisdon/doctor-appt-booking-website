import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";

// reqs checked with postman

export const updateUser = async (req, res) => {

    const id = req.params.id

    try {

        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })

        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedUser })

    } catch (e) {

        console.log(e)
        res.status(500).json({ success: false, message: 'Failed to update' })

    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {

        await User.findByIdAndDelete(id)

        res.status(200).json({ success: true, message: 'Successfully deleted' })

    } catch (e) {

        console.log(e)
        res.status(500).json({ success: false, message: 'Failed to delete' })

    }
}

export const getSingleUser = async (req, res) => {

    const id = req.params.id

    try {

        const user = await User.findById(id).select("-password");

        res.status(200).json({ success: true, message: 'User found', data: user })

    } catch (e) {

        console.log(e)
        res.status(404).json({ success: false, message: 'No user found' })

    }
}

export const getAllUsers = async (req, res) => {

    try {

        const users = await User.find({}).select("-password");

        res.status(200).json({ success: true, message: 'Users found', data: users })

    } catch (e) {

        console.log(e);
        res.status(404).json({ success: false, message: 'Not found' })

    }
}

export const getUserProfile = async (req, res) => {
    const userId = req.userId

    try {
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }

        const { password, ...rest } = user._doc;
        // const appointments = await Booking.find({ user: userId })

        res.status(200).json({ success: true, message: "Profile Info received", data: { ...rest } }); //appointments
    } catch (e) {

        console.log(e.message);

        res.status(500).json({ success: false, message: "Something went wrong, cannot retrieve profile info" })

    }
}

export const getMyAppointments = async (req, res) => {

    try {
        const bookings = await Booking.find({ user: req.userId });

        res.status(200).json({ success: true, message: "Appointments received", data: bookings })

    } catch (e) {
        res.status(500).json({ success: false, message: "Something went wrong, cannot retrieve appointments" })
    }
}

