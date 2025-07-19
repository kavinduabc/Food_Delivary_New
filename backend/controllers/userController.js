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
    user.findOne({email:email}).then((user)=>{
        if(!user){
            return res.status(404).json({
                error:"User is not found"
            });
        }
         const isPasswordValid = bcrypt.compareSync(password, user.password);
         if(isPasswordValid){
            const token = jwt.sign({
                
            })
         }
    })
    

}