import mongoose from "mongoose";

const file = new mongoose.Schema({
    cover_image:{type:String},
    name:{type:String},
    description:{type:String},
    file:{type:Array},
})

export default mongoose.model.users || mongoose.model("file",file)