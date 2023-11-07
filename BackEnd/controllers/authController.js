import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// post reqs checked with postman

const generateToken = loginUser => {
    return jwt.sign({ id: loginUser._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d'
    })
}

export const register = async (req, res) => {

    const { name, email, password } = req.body;

    try {

        let user = await User.findOne({ email });
        //check if user exists
        if (user) {
            return res.status(400).json({ message: `user already exists` });
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //create new user
        user = new User({
            name,
            email,
            password: hashPassword
        })

        await user.save();

        res.status(200).json({ success: true, message: `User was successfully created` });

    } catch (e) {

        console.log(e);

        res.status(500).json({ success: false, message: `Internal server error` });

    }
}


export const login = async (req, res) => {

    const { email } = req.body
    try {


        // check user exists
        const loginUser = await User.findOne({ email });

        if (!loginUser) {
            return res.status(404).json({ message: "User not found" })
        }

        // check password matches
        const passwordMatch = await bcrypt.compare(req.body.password, loginUser.password)

        if (!passwordMatch) {
            return res.status(400).json({ status: false, message: "Email and password do not match" });
        }

        // generate token
        const token = generateToken(loginUser);

        const { password, appointments, ...rest } = loginUser._doc

        res.status(200).json({ status: true, message: "Successful login", token, data: { ...rest } });

    } catch (e) {

        console.log(e);

        res.status(500).json({ status: false, message: "Failed to login" })

    }
}