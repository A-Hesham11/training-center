import React from "react";


const Card = ({id, image, alt, title, desc, price, titleBtn}) => {
  return (
    <div key={id} className="shadow-xl rounded-xl overflow-hidden" data-aos="zoom-in-up">
      <img src={image} alt={alt} />
      <div className="pt-7 p-5">
        <p className='text-xl font-medium text-mainBlack mb-2'>{title}</p>
        <p className='text-base font-normal text-[#6E7697] mb-2'>{desc}</p>
        <h2 className="font-bold text-2xl">{price && price}</h2>
        <button className="text-mainBlack border w-full py-4 border-[#E2E4FF] m-auto mt-4 font-medium rounded-md"> {titleBtn} </button>
      </div>
    </div>
  );
};

export default Card;
