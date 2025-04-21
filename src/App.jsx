import { Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

// import Home from "./Pages/Home";
// import ContactPage from "./Pages/ContactPage";
// import AboutPage from "./Pages/AboutPage";
// import ServicesPage from "./Pages/ServicesPage";
// import NotFound from "./Pages/NotFound";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const ServicesPage = lazy(() => import("./Pages/ServicesPage"));
const NotFound = lazy(() => import("./Pages/NotFound"));

import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <Home />{" "}
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <ContactPage />{" "}
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <AboutPage />{" "}
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <ServicesPage />{" "}
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-xl"> {<NotFound />} </div>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
