import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MoreOurMessage() {
  const messages = [
    {
      title: "Chairman’s Message",
      name: "Eng. Mohamed El-Sayed",
      text: "As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.As Chairman, I emphasize the importance of integrity and long-term growth for our company and clients.",
      img: "src/assets/about/chairman.webp",
      signature: "src/assets/about/signature1.webp", // optional
    },
    {
      title: "General Manager’s Message",
      name: "Mr. Ahmed Hassan",
      text: "Our goal is to deliver exceptional service with technical excellence and human-centric values.",
      img: "src/assets/about/manager.webp",
      signature: "src/assets/about/signature2.webp", // optional
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Slider {...settings}>
        {messages.map((msg, index) => (
          <div key={index} className="px-4 py-6">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-10">
              <img
                src={msg.img}
                alt={msg.title}
                className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover border-4 border-sky-200 shadow-md"
              />
              <div className="text-center md:text-left w-full">
                <h5 className="text-2xl font-bold text-gray-800 mb-2">{msg.title}</h5>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg overflow-auto h-40">
                  <span className="inline-block" >{msg.text}</span>
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 italic">{msg.name}</p>
                  {msg.signature && (
                    <img
                      src={msg.signature}
                      alt="Signature"
                      className="mt-2 w-24 md:w-32"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
