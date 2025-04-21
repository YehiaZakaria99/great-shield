
const ServiceCard = ({ img, title }) => {
  return (
    <div className=" bg-[#222] border border-(--main-color) rounded-lg shadow-md h-full flex flex-col px-4 py-4">
      <div className="img-box">
        <img
          src={img}
          alt={title}
          className="rounded-lg w-full h-52 object-cover"
        />
      </div>
      <div className=" py-2 flex flex-col justify-between flex-1">
        <div>
          <h5 className="mb-0 text-2xl font-semibold tracking-tight text-white ">
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

/* 


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
