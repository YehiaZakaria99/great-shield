import { useState, useEffect, useRef, useCallback } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";

export default function AboutPageCard({
  id,
  title,
  text,
  img,
  aos = "fade-up",
  moreContent,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showModalClass, setShowModalClass] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setShowModalClass(true), 10);
  };

  const closeModal = () => {
    setShowModalClass(false);
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
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
      data-aos={aos}
      className="mb-24 flex flex-col gap-8 items-center text-white"
    >
      {/* المحتوى العادي */}
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
              onClick={openModal}
              className="cursor-pointer group mt-6 text-sm text-orange-400 hover:underline inline-flex items-center gap-1"
              id={id}
            >
              View More
              <FaArrowRight className="transition-transform group-hover:translate-x-1 duration-300" />
            </button>
          )}
        </div>
      </div>

      {/* المودال */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center px-4">
          <div
            ref={modalRef}
            className={`bg-[#222] w-full max-w-3xl rounded-xl p-6 relative transition-all duration-300 transform ${
              showModalClass ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* زر الإغلاق */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
              onClick={closeModal}
            >
              <FaTimes size={20} />
            </button>

            {/* المحتوى */}
            <h4 className="text-2xl font-bold text-orange-400 mb-6">{title}</h4>
            <div>{moreContent}</div>
          </div>
        </div>
      )}
    </div>
  );
}
