import AboutCard from "../Components/AboutCard/AboutCard";

// Images
import ourVision from "/aboutSec/Our-Vision.webp";
import ourMessage from "/aboutSec/Our-Message.webp";
import ourMissoin from "/aboutSec/Our-Mission.webp";
import ourStandards from "/aboutSec/Our-Standards.webp";

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
  return (
    <section id="about" className="py-20 bg-[#161D26]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-bg">About Us</h2>
        <p className="text-lg leading-relaxed max-w-3xl text-gray-100">
          Our construction company specializes in executing engineering projects
          to the highest quality standards. We are distinguished by years of
          experience in designing and building residential, commercial, and
          industrial facilities.
        </p>

        <div className="flex gap-y-5 my-5 justify-center flex-wrap text-center">
          {about.map(({ title, img, link }, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl w-full md:w-1/2 lg:w-1/4"
              data-aos="flip-up"
            >
              <div className="px-3 h-full">
                <AboutCard title={title} img={img} link={link} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
