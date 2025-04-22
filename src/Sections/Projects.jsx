import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "New Cairo Residential Compound",
    location: "New Cairo",
    image: "/projects/project1.jpg",
    link: "/projects/project1",
  },
  {
    title: "Mall Renovation - 6th October",
    location: "6th of October City",
    image: "/projects/project2.jpg",
    link: "/projects/project2",
  },
  {
    title: "Government Building Upgrade",
    location: "Nasr City",
    image: "/projects/project3.jpg",
    link: "/projects/project3",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  pauseOnHover: true,
};

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Featured Projects
        </h2>
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-6">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-1/2 h-64 object-cover rounded-xl"
                />
                <div className="text-center md:text-left md:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-2">{project.title}</h3>
                  <p className="text-gray-500 mb-4">{project.location}</p>
                  <a
                    href={project.link}
                    className="inline-block mt-2 px-5 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
