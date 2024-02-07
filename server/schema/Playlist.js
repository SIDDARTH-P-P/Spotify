import mongoose from "mongoose";

const playlist = mongoose.Schema({
    user_id:{type:String},
    song_id:{type:String},
    playlist:{type:String},
})

export default mongoose.model.playlists || mongoose.model("playlist",playlist);