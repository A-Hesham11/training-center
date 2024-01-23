import React from "react";


const Card = ({id, image, alt, title, price}) => {
  return (
    <div key={id} className="shadow-xl rounded-xl overflow-hidden">
      <img src={image} alt={alt} />
      <div className="pt-7 p-5">
        <p className='text-xl font-medium text-mainBlack mb-2'>{title}</p>
        <h2 className="font-bold text-2xl">{price && price}</h2>
        <button className="text-mainBlack border w-full py-4 border-[#E2E4FF] m-auto mt-4 font-medium rounded-md">سجل الان </button>
      </div>
    </div>
  );
};

export default Card;
