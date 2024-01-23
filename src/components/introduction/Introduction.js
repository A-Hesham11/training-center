import React from 'react'
import Books from "../../assets/books.svg"
import Teacher from "../../assets/teacher.svg"
import Clock from "../../assets/clock.svg"

const Introduction = () => {

    const introductionData = [
        {
            id: 1,
            image: Books,
            alt: "Books",
            title: "60+ كورس متنوع",
            desc: "كورسات متنوعة فى مختلف المجالات تؤهلك لسوق العمل.",
        },
        {
            id: 2,
            image: Teacher,
            alt: "Teacher",
            title: "باقة من أفضل المدربين",
            desc: "لدينا مجموعة من أفضل الكوادر فى مجال التدريب .",
        },
        {
            id: 3,
            image: Clock,
            alt: "Clock",
            title: "إشتراك مدى الحياة",
            desc: "إشتراكك يتضمن دخول مجانى للكورس مدى الحياة .",
        },
    ]
  return (
    <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {introductionData.map((item) => (
                <div className='flex gap-5 items-center bg-white rounded-[20px] p-4 shadow-xl '>
                    <img src={item.image} alt={item.alt}/>
                    <div className='flex gap-1 flex-col'>
                        <h2 className='font-bold text-xl text-mainBlack'>{item.title}</h2>
                        <p className='text-[17px] text-mainBlack'>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Introduction