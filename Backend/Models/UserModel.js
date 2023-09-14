import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        enum:["Seller","Buyer","Admin"],
        default: "Buyer"
    },
    cart:[String]
    
})  
export default mongoose.model("User",userSchema)