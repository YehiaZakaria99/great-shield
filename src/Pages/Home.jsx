// import Contact from "../sections/Contact";
// import Projects from "./../Sections/Projects";
import Hero from "../Sections/Hero";
import About from "./../Sections/About";
import Services from "./../Sections/Services";
// AOS Animation
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: true,
  //     easing: "ease-in-out",
  //   });
  // }, []);
  return (
    <>
      <Hero />
      <Services />
      <About />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </>
  );
};

export default Home;
