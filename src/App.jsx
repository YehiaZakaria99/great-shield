import { Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Sections/Hero";
import { Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-xl"> {<NotFound />} </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
