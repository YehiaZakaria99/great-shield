const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      className={` shadow-lg bg-white/60 group hover:bg-[#222]/60 overflow-hidden  px-4 py-30 transition hover:-translate-y-1 hover:scale-110 hover:shadow-3xl duration-300 h-full`}
    >
      {/* <div className="text-5xl mb-4 text-yellow-600 "><i>{icon}</i></div> */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-white duration-300 ">
        {title}
      </h3>
      <p className="text-white opacity-0 group-hover:opacity-100 duration-300 ">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
