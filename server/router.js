import { Router } from "express";
import * as fun from "./routehandler.js"
import multer from "multer";

const storage = multer.diskStorage({
    destination:"./server/audio",
    filename:(req,file,cb)=>{
        cb(null,Date.now() + "-" + file.originalname)
    }
})
const uploder = multer({storage:storage})

const router = Router()

router.route("/register").post(fun.register);
router.route("/login").post(uploder.single("audio"),fun.adddata);
router.route("/getdata").get(fun.getdata);

export default router;