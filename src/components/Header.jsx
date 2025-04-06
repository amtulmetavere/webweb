import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const hideTimeoutRef = React.useRef(null);

  return (
    <motion.nav>
      <header className=" text-gray-600 body-font flex justify-center">
        <div className="container mx-auto flex  px-5 flex-col md:flex-row items-center absolute z-10">
          <div className="flex mb-4 md:mb-0 items-center justify-center p-4">
            <img src={Logo} alt="Logo" className="w-24 md:w-45 w-40 lg:w-45 xl:w-50 h-auto" />
          </div>

          <nav className="hidden md:ml-auto md:mr-auto lg:flex my-3 flex-wrap items-center text-base bg-white p-1 gap-1/2 rounded-[30px]">
  {["Homepage", "About Us"].map((item) => (
    <a
      key={item}
      className="relative px-5 py-2 font-semibold rounded-[25px] cursor-pointer overflow-hidden
      before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e3b843] before:rounded-[25px] 
      before:transition-all before:duration-300 before:scale-x-0 before:origin-left
      hover:before:scale-x-100 hover:text-white transition-colors duration-300"
    >
      <span className="relative z-10">{item}</span>
    </a>
    
  ))}
{/* Services Dropdown */}
<li
  className="relative list-none"
  onMouseEnter={() => {
    clearTimeout(hideTimeoutRef.current);
    setOpenDropdown(true);
  }}
  onMouseLeave={() => {
    hideTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 200); // 200ms delay before hiding
  }}
>
  <button
    className="relative px-5 py-2 font-semibold rounded-[25px] cursor-pointer overflow-hidden
      before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e3b843] before:rounded-[25px] 
      before:transition-all before:duration-300 before:scale-x-0 before:origin-left
      hover:before:scale-x-100 hover:text-white transition-colors duration-300"
  >
    <span className="relative z-10">Services ▼</span>
  </button>

  {openDropdown && (
    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg transition-all duration-300 ease-in-out">
      {[
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "SEO Optimization",
        "Digital Marketing",
      ].map((service, index) => (
        <li key={index}>
          <a
            href="#"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-white rounded-md"
          >
            {service}
          </a>
        </li>
      ))}
    </ul>
  )}
</li>





                    {["Our Client", "Our Project", "Contact Us"].map((item) => (
    <a
      key={item}
      className="relative px-5 py-2 font-semibold rounded-[25px] cursor-pointer overflow-hidden
      before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#e3b843] before:rounded-[25px] 
      before:transition-all before:duration-300 before:scale-x-0 before:origin-left
      hover:before:scale-x-100 hover:text-white transition-colors duration-300"
    >
      <span className="relative z-10">{item}</span>
    </a>
    
  ))}
</nav>

          <button className="hidden lg:inline-flex items-center px-6 bg-[#e3b843] text-center text-white font-semibold rounded-[22px] border-0 py-1 px-3 focus:outline-none hover:bg-[#af8a26] text-base mt-4 md:mt-0 hover:cursor-pointer transition duration-300">
      Call Now
          </button>
        </div>
      </header>

      {/* Hamburger Icon */}
      <div className="lg:hidden z-100 cursor-pointer transition-colors duration-300 text-white absolute top-6 right-6" onClick={() => setOpen(!open)}>
        {open ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Mobile Menu */}
      <motion.ul
        initial={{ y: "-100%" }}
        animate={{ y: open ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className={`fixed top-20 left-0 w-full bg-white shadow-lg flex flex-col space-y-6 text-lg p-8 lg:hidden z-50 ${open ? "block" : "hidden"}`}
      >
        {["Home", "About"].map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-900 hover:text-indigo-600 transition">
              {item}
            </a>
          </li>
        ))}

        {/* Services Dropdown in Mobile Menu */}
<li className="relative">
  <button
    className="text-gray-900 hover:text-indigo-600 transition gap-1"
    onClick={() => setOpenDropdown(!openDropdown)}
  >
    Services ▼
  </button>

  {openDropdown && (
    <ul className="mt-2 pl-4">
      {/* Map through an array of services */}
      {["Web Development", "Mobile App Development", "UI/UX Design", "SEO Optimization", "Digital Marketing"].map((service, index) => (
        <li key={index}>
          <a
            href="#"
            className="block px-4 py-2 text-gray-900 hover:text-indigo-600 transition"
          >
            {service} {/* Add the service name here */}
          </a>
        </li>
      ))}
    </ul>
  )}
</li>


        {["Clients", "Project", "Contact"].map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-900 hover:text-indigo-600 transition">
              {item}
            </a>
          </li>
        ))}

<button className="bg-[#e3b843] hover:bg-[#af8a26] cursor-pointer text-white py-2 px-4 rounded-md transition duration-300">
  Call Now
</button>

      </motion.ul>
    </motion.nav>
  );
};

export default Header;
