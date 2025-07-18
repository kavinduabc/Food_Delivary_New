import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../models/user.js"

export function userRejister(req,res){

    const data = req.body;

    data.password = bcrypt.hashSync(data.password,10);
    const newUser = new  user(data);
    newUser.save().then(()=>{
        res.json({
            message:"User rejistration successfully"
        })
    }).catch((error)=>{
        console.error(error);
        res.status(500).json({
            error : "user registration faild"
        })
    });

}

export function userLogin(req,res){
    const {email,password} = req.body;
    
}