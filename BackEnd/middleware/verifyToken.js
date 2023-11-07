import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {

    // get token from the headers
    const authToken = req.headers.authorization

    // check token exists
    if (!authToken || !authToken.startsWith('Bearer ')) {

        return res.status(401).json({ success: false, message: 'No token, authorization denied' })

    } try {
        // console.log(authToken);

        const token = authToken.split(" ")[1];

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userId = decoded.id;

        // call the next function
        next();

    } catch (e) {

        console.log(e);

        if (e.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token is expired' });
        }

        return res.status(401).json({ success: false, message: 'Invalid token' });

    }

}


// export const restrict = async (req, res, next) => {

//     const userId = req.userId;

//     let user;

//     const p = await User.findById(userId);

//     if (p) {
//         user = p
//     }

//     if
// }