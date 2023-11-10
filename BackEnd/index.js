import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();
const app = express();
const port = process.env.port

const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send('API is working')
});

// database connection
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })

        console.log("MongoDB connected");

    } catch (e) {

        console.log("error connecting to database");

    }
}

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on ${port}`);
})