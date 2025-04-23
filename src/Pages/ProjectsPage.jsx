import { useContext, useEffect } from "react";
import ProjectsPageCard from "../Components/ProjectsPageCard/ProjectsPageCard";
import { ProjectsContext } from "../Context/ProjectsContext";
import Aos from "aos";

export default function ProjectsPage() {
  const { projects } = useContext(ProjectsContext);
  useEffect(() => {
    Aos.init({ duration: 800 });

    return () => {
      Aos.refreshHard();
    };
  }, []);
  return (
    <section
      className="pt-40 pb-16 bg-[#111] text-white min-h-screen overflow-hidden"
      id=""
    >
      <div className="container">
        <div className="">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-(--main-color) mb-2">
            Projects
          </h2>
          <p className="text-center text-cyan-400 text-xl mb-10">
            Featured Construction Projects
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-easing="ease-in-out"
              >
                <ProjectsPageCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 

Construction-Project-of-a-Post-Office-Building-in-Qalyubia
*/
