import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Package from "./pages/Package"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"


function App() {
  

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destination" element={<Destination/>} />
          <Route path="/package" element={<Package/>} />
            <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
      </Routes>
<Footer/>
     
    </>
  )
}

export default App
