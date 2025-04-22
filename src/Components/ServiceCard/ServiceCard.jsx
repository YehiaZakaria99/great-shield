const ServiceCard = ({ img, title }) => {
  return (
    <div className="justify-self-center  group w-[160px] sm:w-[calc(50%-20px)] lg:w-[calc(25%-20px)] overflow-hidden border-2 border-(--main-color) rounded-xl bg-[#222] shadow-md transition-transform duration-300 hover:scale-105 ">
      <div className="w-full h-[80px] sm:h-[150px] overflow-hidden p-4 ">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm sm:text-base font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;

/* 

      className="group overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105"
      data-aos="zoom-in"
    >
      <div className="w-full h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>






#############33

    <div
      className={` shadow-lg bg-white group hover:bg-[#222]/60 overflow-hidden  px-4 py-30 transition hover:-translate-y-1 hover:scale-110 hover:shadow-3xl duration-300 `}
    >
      <div className="img-box">
        <img src={buildingConstruction} alt={title} />
      </div>
      
    </div>


########3
<h3 className="text-xl font-bold mb-2 group-hover:text-white duration-300 ">
        {title}
      </h3>
      <p className="text-white opacity-0 group-hover:opacity-100 duration-300 ">
        {description}
      </p>

*/

/* 






*/
