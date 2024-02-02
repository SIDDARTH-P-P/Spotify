import mongoose from "mongoose";

const user = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
})

export default mongoose.model.users || mongoose.model("user",user)