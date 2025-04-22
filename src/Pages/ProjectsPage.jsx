import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Faculty-of-Computers-and-Artificial-Intelligence-Benha-University
import img1 from "/projectsPage/Faculty-of-Computers-and-Artificial-Intelligence-Benha-University/01.jpg";
import img2 from "/projectsPage/Faculty-of-Computers-and-Artificial-Intelligence-Benha-University/02.jpg";
import { FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "AI & Computer Science Building - Benha University",
    images: [img1, img2],
    shortDescription:
      "Construction of the Faculty of AI and Computer Science at Benha University...",
    fullDescription: `Owner: Benha University\nConsultant: Engineering Department, Benha University\nStart Date: ...\nContract Value: ...\nProject Description: Construction of AI & CS Faculty (6 floors)\nScope of Work:\n• Structural Works\n• Interior & Exterior Finishes\n• Electromechanical Works\n• Landscaping Works`,
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-2">
        Projects
      </h2>
      <p className="text-center text-cyan-400 text-xl mb-10">
        Featured Construction Projects
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-700/30 transition-shadow"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-orange-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 line-clamp-3">
                {project.shortDescription}
              </p>
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-4 inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 ">
          <div className="bg-[#1a1a1a] text-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-x-hidden overflow-auto p-6 relative custom-scrollbar">
            {/* زر الإغلاق */}
            <button
              className="absolute z-50 top-4 right-4 text-gray-400 hover:text-red-500 transition"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes size={20} />
            </button>
            <Slider {...settings} className="mb-6 ">
              {selectedProject.images.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt=""
                    className="rounded-md w-full max-h-96 object-cover mx-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
            <div className="content my-10">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                {selectedProject.title}
              </h3>
              <pre className="text-gray-300 whitespace-pre-wrap text-sm">
                {selectedProject.fullDescription}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
