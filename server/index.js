import "dotenv/config";
import express from 'express';
import cors from 'cors';
import connectDB from "./db/connection.db.js";
import userRouter from "./routes/user.route.js";

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,PATCH,DELETE"
}))

connectDB()
    .then(
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    ).catch((error) =>
        console.log(`Error while connecting with database: ${error.message}`)
    );

app.use("/api/users", userRouter);

