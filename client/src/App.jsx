import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile"
import Register from "./pages/register/Register"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

function App() {

  const {user}=useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user?<Home/>:<Register/>}/>
      <Route path="/profile/:username" element={<Profile/>}/>
      <Route path="/register" element={user?<Home/>:<Register/>}/>
      <Route path="/login" element={user?<Home/>:<Login/>}/>

    </Routes>
  )
}

export default App
