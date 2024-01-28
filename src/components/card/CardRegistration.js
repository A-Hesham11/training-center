import { FaRegClock } from "react-icons/fa";
import { HiOutlineCollection } from "react-icons/hi";

const CardRegistration = ({
  id,
  image,
  alt,
  title,
  desc,
  number,
  time,
  price,
  discound,
  link,
  titleBtn,
}) => {
  return (
    <div
      key={id}
      className="shadow-xl rounded-xl overflow-hidden h-full"
      data-aos="zoom-in-up"
    >
      <img src={image} alt={alt} className="w-full h-1/2" />
      <div className="pt-7 p-5 flex flex-col justify-between gap-1 h-1/2">
        <p className="font-medium text-[#090761] mb-2">{title}</p>
        <p className="text-md font-bold text-mainBlack mb-2">{desc}</p>
        <div>
          <div></div>
          {discound && (
            <p className="text-[#788ea4] float-end">
              {" "}
              <span>{discound} </span> ر.س
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[#788ea4] flex items-center gap-3">
            <div className="flex items-center gap-1">
              <HiOutlineCollection size={22} />
              <p>{number}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaRegClock size={20} />
              <p>{time}</p>
            </div>
          </div>
          <p className="text-xl font-bold text-mainBlack">
            {" "}
            <span>{price} </span> ر.س
          </p>
        </div>
        <a href={link}>
          <button className="text-mainBlack border w-full py-3 border-[#E2E4FF] mx-auto mt-4 font-medium rounded-md">
            {" "}
            {titleBtn}{" "}
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardRegistration;
