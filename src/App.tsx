import "./App.css";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
