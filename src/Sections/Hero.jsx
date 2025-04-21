// import useNavigateToTop from "../Hooks/useNavigateToTop";

export default function Hero() {
  // const goTo = useNavigateToTop();

  return (
    <section className="h-screen hero-sec bg-cover bg-center relative">
      <div className="absolute inset-0 bg-(--nav-bg)/75 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-bg-hero">
          Great Shield
        </h1>
        <p className="text-lg md:text-2xl mb-10">
          Construction Services with the Highest Quality and Professionalism
        </p>
        <button
          // onClick={() => goTo("/contact")}
          className="cursor-pointer text-lg bg-(--nav-bg) text-(--main-color) hover:bg-(--main-color) hover:text-(--nav-bg) transition duration-300 font-semibold py-2 px-6 rounded-md"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
