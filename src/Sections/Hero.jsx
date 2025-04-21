// import useNavigateToTop from "../Hooks/useNavigateToTop";

// import { useNavigate } from "react-router-dom";

export default function Hero() {
  // const goTo = useNavigate();

  return (
    <section
      className="h-screen hero-sec bg-cover bg-center bg-no-repeat bg-fixed p-[100px_0] relative"
      style={{ backgroundImage: "url(/hero/bgHero.webp)" }}
    >
      <div className="absolute inset-0 bg-(--nav-bg)/75 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-bg-hero">
          Great Shield
        </h1>
        <p className="text-lg md:text-2xl mb-10">
          Construction Services with the Highest Quality and Professionalism
        </p>
        <div className="flex justify-center py-2">
          <button
            // onClick={() => goTo("/about#message-details")}
            className="inline-flex items-center outline-none px-4 py-2 group text-md font-medium border-2 bg-(--nav-bg)  text-(--main-color) hover:bg-(--main-color) hover:text-(--nav-bg) transition-all duration-300 rounded-lg"
          >
            Contact Us
            <svg
              className="w-4 h-4 ms-2 group-hover:animate-bounceX duration-75"
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
      </div>
    </section>
  );
}
