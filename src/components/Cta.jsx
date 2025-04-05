import React from 'react';
import video from '../assets/office.mp4';
const stats = [
  {
    
    value: "2.7K",
    label: "Daily Reach",
  },
  {
   
    value: "1.3K",
    label: "Happy Clients",
  },
  {
    
    value: "74",
    label: "Partner Companies",
  },
  {
   
    value: "46",
    label: "Deals with Countries",
  },
];

const Cta = () => {
  return (
    <section className="text-white body-font">


    <div className="py-10 w-full">
      <div className="flex flex-wrap  text-center w-inherit justify-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full bg-[#e3b843] relative  border-l border-gray-200">
            <div className="px-4 py-6 text-white rounded-lg before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#876b20] before:transition-all before:duration-300 before:scale-x-0 before:origin-left
      hover:before:scale-x-100 hover:text-white transition-colors duration-300">
              <h2 className="title-font font-bold text-5xl  relative z-10">{stat.value}</h2>
              <p className="leading-relaxed relative text-xl font-semibold z-10">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Cta;
