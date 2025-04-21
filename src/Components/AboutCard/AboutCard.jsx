import { useRef } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const AboutCard = ({ title, img, link }) => {
  const elementRef = useRef(null);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -400;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <HashLink smooth to={link} scroll={(el) => scrollWithOffset(el)}>
      <div className="img-about h-96 group cursor-pointer relative overflow-hidden">
        <img
          className="block h-full object-cover duration-300 group-hover:scale-110"
          src={img}
          alt={title}
          loading="lazy"
        />
        <div className="start-0 top-0 w-full h-full flex items-end justify-center absolute shadow-lg bg-white/40 group-hover:bg-[#222]/50 transition duration-300 group-hover:shadow-3xl">
          <h3 className="text-xl text-(--nav-bg) font-bold mb-5 transition duration-300 group-hover:text-white -translate-y-5 group-hover:-translate-y-10">
            {title}
          </h3>
          <div className="icon text-3xl absolute text-center z-50 mb-2 text-(--nav-bg) transition duration-300 opacity-0 group-hover:text-white group-hover:-translate-y-5 group-hover:opacity-100">
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>
    </HashLink>
  );
};

export default AboutCard;
