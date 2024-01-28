import React from "react";


const Card = ({id, image, alt, title, desc, price, titleBtn, link}) => {
  return (
    <div key={id} className="shadow-xl rounded-xl overflow-hidden h-full" data-aos="zoom-in-up">
      <img src={image} alt={alt} className="w-full h-[60%]"/>
      <div className="pt-7 p-5 h-[40%] flex flex-col justify-between">
        <p className='text-xl font-medium text-mainBlack mb-2'>{title}</p>
        <p className='text-base font-normal text-[#6E7697] mb-2'>{desc}</p>
        <h2 className="font-bold text-2xl">{price && price}</h2>
        <a href={link}>
          <button className="text-mainBlack border w-full py-4 border-[#E2E4FF] mx-auto mt-4 font-medium rounded-md"> {titleBtn} </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
