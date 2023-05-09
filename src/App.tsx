import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import Sidebar from "./pages/Dashboard/Sidebar/Sidebar";
import UploadData from "./components/uploadData/UploadData";
import Dashboard from "./pages/Dashboard/Dashboard";
import SearchDefaulters from "./pages/Dashboard/SearchDefaulters";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    //   {/* <NavBar /> */}
    //   {/* <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/services" element={<Services />} />
    //     <Route path="/team" element={<Team />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes> */}
    //   {/* <Footer /> */}
    // </BrowserRouter>
    <BrowserRouter>
      <Routes >
        <Route element={<DashboardLayout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<UploadData />} />
          <Route path="/search" element={<SearchDefaulters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
