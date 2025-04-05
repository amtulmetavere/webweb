import React from 'react'
import Gradient from '../assets/gradient.jpg'
const Hero = () => {
  return (
    <div className="absolute w-full top-0">
       <div class="flex flex-wrap w-full ">
    <div class="w-full mx-auto ">
      <div class="flex flex-wrap w-full  `url(${Gradient})` bg-cover bg-center  py-32 px-10 relative mb-4">
        <div class="text-center relative z-10 w-full">
          <h2 class="text-2xl text-white font-medium title-font mb-2">Create Amazing Business Websites</h2>
          <h1 class="text-7xl text-white font-bold title-font mb-2">Web Octane</h1>
          <p class="leading-relaxed">New to online business and unsure how to manage or grow it? Web Octane is here to help. We provide marketing, web development, SEO, and PPC services to boost your sales and strengthen your brand. Let us be a part of your journey and take your business to the next level.</p>

          <button class="inline-flex items-center px-6 bg-[#e3b843] text-center text-white font-semibold rounded-[22px] bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Get Started
        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg> */}
      </button>
          </div>
          </div>
          </div>
          </div>
         

</div>

  )
}

export default Hero
