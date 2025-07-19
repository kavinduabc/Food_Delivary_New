import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    userType : {
        type : String,
        required : true,
        default : "customer"   
    }
})

const user = mongoose.model("Users",userSchema);
export default user;