import express, { urlencoded } from "express";
import path from "path"
import router from "./router.js";
import cors from "cors";
import dotenv from "dotenv";
import connect_DB from "./connect.js";

dotenv.config();


const app = express()

app.use(cors())
app.use(express.json({limit:"25mb"}))
app.use(urlencoded({extended:true}))
app.use("/api",router)

app.get("*/",(req,res)=>{
    return res.sendFile(path.resolve("./dist/index.html"));
})

connect_DB().then( ()=>{
    app.listen(process.env.VITE_PORT,(error)=>{
        if(error){
            console.log(error);
        }
        console.log("server start");
    }) 
})
.catch((error)=>{
    console.log(error);
})