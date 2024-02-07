import { Router } from "express";
import * as fun from "./routehandler.js"
import multer from "multer";
import Auth from "./middlewares/Auth.js";

const storage = multer.diskStorage({
    destination:"./server/audio",
    filename:(req,file,cb)=>{
        cb(null,Date.now() + "-" + file.originalname)
    }
})
const uploder = multer({storage:storage})

const router = Router()

router.route("/register").post(fun.register);
router.route("/login").post(fun.login);
router.route("/add").post(uploder.single("audio"),fun.adddata);
router.route("/getdata").get(fun.getdata);
router.route("/getalldata").get(fun.getalldata);
router.route("/get_file/:file").get(fun.get_file);


router.route("/get_all_list").post(Auth,fun.get_all_list);



// router.route("/playlist").get(Auth,fun.playlist);
router.route("/list_name").post(Auth,fun.list_name);
router.route("/get_list").get(Auth,fun.get_list);
router.route("/add_list").post(Auth,fun.add_list);
export default router;