// import { Link } from "react-router-dom";
import AboutCard from "../Components/AboutCard/AboutCard";

// NavigateHook
import useNavigateToTop from "../Hooks/useNavigateToTop";

// imgs
import ourVision from "../assets/aboutSec/Our-Vision.webp";
import ourMessage from "../assets/aboutSec/Our-Message.webp";
import ourMissoin from "../assets/aboutSec/Our-Mission.webp";
import ourStandards from "../assets/aboutSec/Our-Standards.webp";



// Data

const about = [
  { title: "Our Vision", img: ourVision, link: "/about#vision-details" },
  { title: "Our Mission", img: ourMissoin, link: "/about#mission-details" },
  {
    title: "Our Standards",
    img: ourStandards,
    link: "/about#standards-details",
  },
  { title: "Our Message", img: ourMessage, link: "/about#message-details" },
];

const About = () => {

  const goTo = useNavigateToTop();

  return (
    <section id="about" className="py-20 bg-[#161D26] ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-bg" >About Us</h2>
        <p className="text-lg leading-relaxed max-w-3xl text-gray-100 "  >
          Our construction company specializes in executing engineering projects
          to the highest quality standards. We are distinguished by years of
          experience in designing and building residential, commercial, and
          industrial facilities.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 my-5 text-center">
          {about.map((about, i) => (
            <div
              className={` overflow-hidden rounded-2xl`}
              data-aos="flip-up"
              key={i}
            >
              <AboutCard
                title={about.title}
                img={about.img}
                link={about.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
