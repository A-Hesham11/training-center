import React, { useEffect, useRef, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import Modal from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import VideoImg from "../../assets/videoImg.png";
import { FaPlayCircle } from "react-icons/fa";
import { t } from "i18next";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    height: "75%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "none",
    backgroundColor: "transparent",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

const LearnNewSkills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#cccccc2e] py-28">
      <div className="container">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-5">
          <div data-aos="zoom-in">
            <h2 className="text-3xl font-semibold">
              {t("Learn new skills online with top teachers")}
            </h2>
            <p className="text-[#10285d] my-4">
              {t("Learn new skills that qualify you for the labor market with the best training and education staff..")}
            </p>
            <ul className="my-10">
              <li className="flex gap-3">
                <IoMdCheckmark size={26} className="fill-mainOrange" />
                <p className="text-mianBlack">
                  {t("Effective teaching techniques compatible with all age groups.")}
                </p>
              </li>
              <li className="flex gap-3 my-4">
                <IoMdCheckmark size={26} className="fill-mainOrange" />
                <p className="text-mianBlack">
                    {t("Join millions of people from around the world to learn together.")}
                </p>
              </li>
              <li className="flex gap-3">
                <IoMdCheckmark size={26} className="fill-mainOrange" />
                <p className="text-mianBlack">
                  {t("Join millions of people from all over the world. Online learning is easy and natural.")}
                </p>
              </li>
            </ul>
          </div>
          <div data-aos="zoom-in">
            <button onClick={openModal} className="relative bg-white">
              <img src={VideoImg} alt="Video" />
              <FaPlayCircle
                size={95}
                className="play-icon absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 fill-mainOrange bg-white rounded-full"
              />
            </button>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="YouTube Video Modal"
              style={customStyles}
            >
              <button onClick={closeModal}>
                <IoCloseCircleOutline size={32} className="text-mainOrange" />
              </button>
              <iframe
                width="100%"
                height="90%"
                src="https://www.youtube.com/embed/up68UAfH0d0?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnNewSkills;
