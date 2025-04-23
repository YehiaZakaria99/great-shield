import Aos from "aos";
import { useState, useEffect, useRef, useCallback } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";

export default function AboutPageCard({ id, title, text, img, moreContent }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalClass, setShowModalClass] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setShowModalClass(true), 10);
  };

  const closeModal = () => {
    setShowModalClass(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  const handleClickOutside = useCallback((e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  }, []);

  const handleEscape = useCallback((e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen, handleClickOutside, handleEscape]);


  return (
    <div
      data-aos='fade-up'
      data-aos-easing="ease-in-out"
      className="mb-24 flex flex-col gap-8 items-center text-white"
      id={id}
    >
      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        <div className="w-full md:w-1/2 max-w-md">
          <img
            src={img}
            alt={title}
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold text-sky-400 mb-4">{title}</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{text}</p>

          {moreContent && (
            <button
              onClick={() => openModal()}
              className="mt-6 gap-2 inline-flex items-center group outline-none px-3 py-2 text-sm font-medium border-2 border-(--main-color)  text-(--main-color) hover:bg-(--main-color) hover:text-(--nav-bg) transition-all duration-300 rounded-lg"
            >
              View More
              <FaArrowRight className="transition-all group-hover:animate-bounceX duration-75" />
            </button>
          )}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 bg-[rgba(0_0_0_.15)] backdrop-blur-sm flex items-center justify-center px-4 py-2 md:py-6 overflow-y-auto transition-all duration-300 ${
            showModalClass ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={modalRef}
            className={`bg-[#222] w-full max-w-5xl rounded-2xl p-4 sm:p-6 md:p-10 shadow-2xl transform transition-all duration-300 ${
              showModalClass ? "scale-100 opacity-100" : "scale-95 opacity-0"
            } max-h-[90vh] overflow-y-auto`}
          >
            {/* close modal */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
              onClick={() => closeModal()}
            >
              <FaTimes size={20} />
            </button>

            <h4 className="text-2xl font-bold text-orange-400 mb-6">{title}</h4>
            <div>{moreContent}</div>
          </div>
        </div>
      )}
    </div>
  );
}

/* 


    

*/

/* 

{isModalOpen && (
  <div
    className={`fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center px-4 py-2 md:py-6 overflow-y-auto transition-all duration-300 ${
      showModalClass ? "opacity-100" : "opacity-0"
    }`}
  >
    <div
      ref={modalRef}
      className={`bg-[#222] w-full max-w-5xl rounded-2xl p-4 sm:p-6 md:p-10 shadow-2xl transform transition-all duration-300 ${
        showModalClass ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`}
    >
      { المحتوى هنا }
      </div>
      </div>
    )}
    
*/
