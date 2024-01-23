import React from "react";

const BestTrainers = ({ id, trainerImage, alt, trainerName, trainerInfo }) => {
  return (
    <div key={id} className="rounded-xl overflow-hidden text-center">
      <img src={trainerImage} alt={alt} className="rounded-full m-auto"/>
      <div className="pt-7 p-5">
        <h2 className="font-bold text-2xl mb-3">{trainerName}</h2>
        <p className="text-xl font-medium text-[#57667e] mb-2">{trainerInfo}</p>
      </div>
    </div>
  );
};

export default BestTrainers;
