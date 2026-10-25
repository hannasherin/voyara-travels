import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Package from "./pages/Package"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import PackageDetails from "./pages/PackageDetails"
import Booking from "./pages/Booking"
import PackageCard from "./components/PackageCard/PackageCard"

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/package" element={<Package />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/package/:id" element={<PackageDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/destinations/:destinationName/packages" element={<PackageCard />}/>

      </Routes>
      <Footer />

    </>
  )
}

export default App
