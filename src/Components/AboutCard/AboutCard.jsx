import { useEffect, useRef } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const AboutCard = ({ title, img, link }) => {
  const elementRef = useRef(null);
  // const rect = elementRef.current.getBoundingClientRect();
  const scrollWithOffset = (el) =>
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset -200,
      behavior: "smooth",
    });

  return (
    <>
      <HashLink smooth to={link} scroll={(el) => scrollWithOffset(el)}>
        <div className="img-about h-96 group cursor-pointer relative overflow-hidden">
          <img
            className="block h-full object-cover duration-300 group-hover:scale-110"
            src={img}
            alt={title}
            loading="lazy"
          />
          <div
            className={`start-0 top-0 w-full h-full flex items-end justify-center absolute shadow-lg bg-white/40 group-hover:bg-[#222]/50 transition duration-300  group-hover:shadow-3xl`}
          >
            <h3 className="text-xl text-(--nav-bg) font-bold mb-5 transition duration-300 group-hover:text-white -translate-y-5 group-hover:-translate-y-10 ">
              {title}
            </h3>
            <div className="icon text-3xl absolute text-center z-50 mb-2 text-(--nav-bg) transition duration-300 opacity-0 group-hover:text-white  group-hover:-translate-y-5 group-hover:opacity-100">
              <FaArrowAltCircleRight />
            </div>
          </div>
        </div>
      </HashLink>
    </>
  );
};

export default AboutCard;

/* 

const elementRef = useRef(null);

// Later in your component, you can access getBoundingClientRect
const rect = elementRef.current.getBoundingClientRect();

  const scrollWithOffset = (el) => window.scrollTo({ top: el.rect.top + window.pageYOffset - 100, behavior: 'smooth' });
  <HashLink smooth scroll={el => scrollWithOffset(el)} to="/new/legal-compliance#TermsConditionsSec" className="nav-link active" aria-current="page" >
      Terms & Conditions
  </HashLink>


*/

/* 
  
  
  <div className="text-5xl mb-4 text-yellow-600 "><i>{icon}</i></div>
        <p className="text-white opacity-0 group-hover:opacity-100 duration-300 ">{description}</p>
  
  */
