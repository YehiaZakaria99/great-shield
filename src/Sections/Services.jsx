import ServiceCard from "../Components/ServiceCard/ServiceCard";

// Data
const services = [
  {
    title: "Building Construction",
    description:
      "We construct residential, commercial, and industrial facilities according to the highest quality standards",
    bgImg: "building-construction",
  },
  {
    title: "Engineering Design",
    description:
      "Designing all construction projects and supervising their technical execution",
    bgImg: "engineering-design",
  },
  {
    title: "Maintenance Works",
    description:
      "Providing regular maintenance services for the company’s and clients’ buildings",
    bgImg: "maintenance-works",
  },
  {
    title: "Project Management",
    description:
      "Planning and executing all construction projects, from feasibility studies to final delivery",
    bgImg: "project-management",
  },
];

const Services = () => {
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
          {services.map(({ title, description, bgImg }, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl ${bgImg} bg-cover bg-center`}
            >
              <ServiceCard title={title} description={description} />
            </div>
          ))}
        </div>

        <div className="text-center my-10 py-5">
          <button
            className="cursor-pointer text-lg bg-(--main-color) text-(--nav-bg) hover:bg-(----nav-bg) hover:text-(--main-color) duration-300 font-semibold py-2 px-6 rounded-md"
          >
            More Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
