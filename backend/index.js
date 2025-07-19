import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoUrl = "mongodb+srv://admin:root@cluster0.paigr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl).then(() =>
    console.log("MongoDB connection successfully")
).catch((err) =>
    console.log("MongoDB connection failed", err.message)
);

app.use((req,res,next)=>{
    let token = req.header("Authorization");
    if(token){
        token = token.replace("Bearer","");

        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
        }catch(err){
            console.error("JWT verification failed", err.message);
        }
    }
    next();
});

app.use("/api/users" , userRouter)

const PORT = 4000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
