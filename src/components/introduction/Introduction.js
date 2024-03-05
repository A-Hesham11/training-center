import React from 'react'
import Books from "../../assets/books.svg"
import Teacher from "../../assets/teacher.svg"
import Clock from "../../assets/clock.svg"
import { t } from 'i18next'

const Introduction = () => {

    const introductionData = [
        {
            id: 1,
            image: Books,
            alt: "Books",
            title: "60+ diverse courses",
            desc: "Various courses in various fields prepare you for the labor market.",
        },
        {
            id: 2,
            image: Teacher,
            alt: "Teacher",
            title: "A group of the best trainers",
            desc: "We have a group of the best cadres in the field of training.",
        },
        {
            id: 3,
            image: Clock,
            alt: "Clock",
            title: "Lifetime subscription",
            desc: "Your subscription includes free access to the course for life.",
        },
    ]
  return (
    <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {introductionData.map((item, index) => (
                <div key={index} className='flex gap-5 items-center bg-white rounded-[20px] p-4 shadow-xl' data-aos="zoom-in-up">
                    <img src={item.image} alt={item.alt}/>
                    <div className='flex gap-1 flex-col'>
                        <h2 className='font-bold text-xl text-mainBlack'>{t(item.title)}</h2>
                        <p className='text-[17px] text-mainBlack'>{t(item.desc)}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Introduction