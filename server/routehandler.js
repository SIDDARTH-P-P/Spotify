import users from "./schema/users.js";
import files from "./schema/files.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import Playlist from "./schema/Playlist.js";
const { sign } = jwt;

export async function register(req, res) {
    try {
        let { username, email, password } = req.body
        let check = await users.findOne({ username })
        if (check) {
            return res.status(201).json("user already exists !");
        }
        let hashed = await bcrypt.hash(password, 10);
        let user = await users.create(
            {
                username,
                email,
                password: hashed,
            }
        )
        return res.status(200).json("Account successfully created");;
    } catch (error) {
        console.log(error);
    }
}

export async function login(req, res) {
    try {
        let { username, password } = req.body
        let check = await users.findOne({ username })
        if (!check) {
            return res.status(201).json("user not found !")
        }
        let password_check = await bcrypt.compare(password, check.password)
        if (password_check) {
            let token = await sign({ username: check.username, id: check._id }, process.env.SECRET_KEY, { expiresIn: "24h" })
            return res.status(200).json({ msg: "login success", token });
        }
        return res.status(201).json("Invalid password or username")
    } catch (error) {
        console.log(error);
    }
}


export async function adddata(req, res) {
    try {
        let { coverimage, name, description } = req.body
        let add = await files.create({
            cover_image: coverimage,
            name,
            description,
            file: req.file,
        })
        if (add) {
            return res.status(200).json("sussessfully added");
        }
        return res.status(201).json("error to add file !");
    } catch (error) {
        console.log(error);
    }
}

export async function getdata(req, res) {
    try {
        let datas = await files.find().limit(2)
        res.json(datas)
    } catch (error) {
        console.log(error);
    }
}



export function get_file(req, res) {
    try {
        let { file } = req.params
        return res.sendFile(path.resolve(`./server/audio/${file}`))
    } catch (error) {
        console.log(error);
    }
}


export async function getalldata(req, res) {
    try {
        let datas = await files.find()
        res.json(datas)
    } catch (error) {
        console.log(error);
    }
}


export async function get_list(req, res) {
    try {
        let { id } = req.user;
        let get = await users.find({ _id: id })
        res.status(200).json(get)
    } catch (error) {
        console.log(error);
    }
}


export async function add_list(req, res) {
    let { id } = req.user;
    let { list_name, song_id } = req.body;
    let add = await Playlist.create({
        user_id:id,
        song_id:song_id ,
        playlist:list_name ,
    })
}


export async function get_all_list(req,res){
    let {id} = req.body;
    let {list_name} = req.body;
    let all = await Playlist.find({playlist:list_name})
    let song_id = all.map(item => item.song_id);
    let songes = await files.find({ _id: { $in: song_id } });
    res.status(200).json(songes)
}


export async function list_name(req,res){
    let {id} = req.user;
    let {name} = req.body;
    let add = await users.updateOne({_id:id},{$push:{playlist:name}})
    console.log(add);
}