import Home from "./page/home";
import Login from "./page/login";
import Register from "./page/Register";
import Adminpage from "./page/admin";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import config from "./config";

config();

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="/admin" element={<Adminpage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}


