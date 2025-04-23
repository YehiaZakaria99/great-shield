import Hero from "../Sections/Hero";
import Services from "./../Sections/Services";
import About from "./../Sections/About";
import Projects from "../Sections/Projects";
// AOS Animation
import "aos/dist/aos.css";

const Home = () => {
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
