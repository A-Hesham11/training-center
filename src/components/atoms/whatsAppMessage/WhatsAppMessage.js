import React, { useEffect, useState } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

const WhatsAppMessage = () => {

  return (
    <button
      className={`bg-mainOrange text-white rounded-full p-3 fixed bottom-6 right-6 shadow ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowTurnUp size={25} />
    </button>
  );
};

export default WhatsAppMessage;