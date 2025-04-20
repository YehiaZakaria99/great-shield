// src/sections/Services.jsx
import {
  FaTools,
  FaHardHat,
  FaBuilding,
  FaDraftingCompass,
} from "react-icons/fa";
import ServiceCard from "../Components/ServiceCard/ServiceCard";

// NavigateHook
import useNavigateToTop from "../Hooks/useNavigateToTop";

// Data
const services = [
  {
    icon: <FaBuilding />,
    title: "Building Construction",
    description:
      "We construct residential, commercial, and industrial facilities according to the highest quality standards",
    bgImg: `url('src/assets/servicesSec/Building-Construction.webp')`,
  },
  {
    icon: <FaDraftingCompass />,
    title: "Engineering Design",
    description:
      "Designing all construction projects and supervising their technical execution",
    bgImg: `url('src/assets/servicesSec/Engineering-Design.webp')`,
  },
  {
    icon: <FaTools />,
    title: "Maintenance Works",
    description:
      "Providing regular maintenance services for the company’s and clients’ buildings",
    bgImg: `url('src/assets/servicesSec/Maintenance-Works.webp')`,
  },
  {
    icon: <FaHardHat />,
    title: "Project Management",
    description:
      "Planning and executing all construction projects, from feasibility studies to final delivery",
    bgImg: `url('src/assets/servicesSec/Project-Management.webp')`,
  },
];

const Services = () => {
  const goTo = useNavigateToTop();

  return (
    <section id="services" className="py-10 bg-gradient-to-b bg-(--nav-bg)">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold mb-12 text-white text-bg"
          data-aos="fade-up"
        >
          Our Serviecs
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 my-5">
          {services.map((service, i) => (
            <div
              key={i}
              // data-aos= 'fade-up'
              style={{
                backgroundImage: service.bgImg,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={` overflow-hidden rounded-2xl `}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
        <div className="text-center my-10 py-5">
          <button
            className="cursor-pointer text-lg bg-(--main-color) text-(--nav-bg) hover:bg-(----nav-bg) hover:text-(--main-color) duration-300 font-semibold py-2 px-6 rounded-md"
            onClick={() => goTo("/services")}
          >
            More Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
