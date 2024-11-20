import './App.css'
import {Route, Router, Routes} from "react-router-dom";
import Profile from "./pages/profile/Profile.jsx";
import Home from "./pages/home/Home.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
