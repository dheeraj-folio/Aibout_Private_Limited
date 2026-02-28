import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services01 from "./components/Services01";
import VisionMission01 from "./components/VisionMission01"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./Home";
import About from "./components/About";
import Company from "./components/Company"
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/aibout" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/services01" element={<Services01 />} />
        <Route path="/VisionMission01" element={<VisionMission01 />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Company" element={<Company />} />
      </Routes>

      <Footer />
    </Router>
    
  );
}

export default App;