import { useNavigate } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard/ServiceCard";
import useNavigateToTop from "../Hooks/useNavigateToTop";

import buildingConstruction from "/servicesSec/Building-Construction.webp";
import engineeringDesign from "/servicesSec/Engineering-Design.webp";
import maintenanceWorks from "/servicesSec/Maintenance-Works.webp";
import projectManagement from "/servicesSec/Project-Management.webp";

// Data
const services = [
  {
    title: "Building Construction",
    description:
      "We construct residential, commercial, and industrial facilities according to the highest quality standards",
    img: buildingConstruction,
  },
  {
    title: "Engineering Design",
    description:
      "Designing all construction projects and supervising their technical execution",
    img: engineeringDesign,
  },
  {
    title: "Maintenance Works",
    description:
      "Providing regular maintenance services for the company’s and clients’ buildings",
    img: maintenanceWorks,
  },
  {
    title: "Project Management",
    description:
      "Planning and executing all construction projects, from feasibility studies to final delivery",
    img: projectManagement,
  },
];

const Services = () => {
  const goTo = useNavigateToTop();
  return (
    <section
      id="services"
      className="py-10 bg-gradient-to-b bg-(--nav-bg) overflow-auto"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold mb-12 text-white text-bg"
          data-aos="fade-up"
        >
          Our Serviecs
        </h2>

        <div className="flex gap-y-5 my-5 justify-center flex-wrap">
          {services.map(({ title, description, img }, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl w-full md:w-1/2 lg:w-1/4`}
            >
              <div className="px-3 h-full">
                <ServiceCard title={title} img={img} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-10  py-5">
        <button
          onClick={() => goTo("/services")}
          className="inline-flex items-center group outline-none px-4 py-2 text-sm font-medium border-2 border-(--main-color)  text-(--main-color) hover:bg-(--main-color) hover:text-(--nav-bg) transition-all duration-300 rounded-lg"
        >
          More Details
          <svg
            className="w-4 h-4 ms-2 rtl:rotate-180 group-hover:animate-bounceX duration-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Services;
