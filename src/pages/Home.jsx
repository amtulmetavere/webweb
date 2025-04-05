import gradient from "../assets/bg.jpg";
import About from '../components/About'
import Brands from '../components/brands'
import Help from '../components/Help'
import Cta from '../components/Cta'
import Services from '../components/Services'
import Cta2 from '../components/cta2'
import Testimonial from '../components/Testimonial'
import Teams from '../components/Teams'
import Projects from "../components/Projects";  
function Home() {
  return (
    <div>
   
    <section
      className="relative text-center w-full h-[600px] flex justify-center items-center"
      style={{
        backgroundImage: `url(${gradient})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay to make background dull */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-white flex flex-col items-center gap-4">
        <h4 className="text-xl">Elevate Your Business</h4>
        <h2 className="text-7xl font-bold bg-[#af8a26] bg-clip-text text-transparent mb-4">
          Experience
        </h2>
        <p className="text-lightText text-xl mb-6">
          Empowering brands with creative and result-driven solutions
        </p>
        <button
          aria-label="Get Started"
          className="relative font-bold px-6 py-2 rounded-xl shadow-lg transition duration-300 
          bg-gradient-to-r from-gray-400 via-gray-800 to-yellow-400 
          hover:from-black/70 hover:via-yellow-500 hover:to-gray-700 text-white"
        >
          Get Started
        </button>
      </div>
    </section>
    <About/>
    <Services/>
    <Cta/>
    <Projects/>
    <Brands/>
  
   
   
    <Testimonial/>
    <Teams/>
    <Cta2/>
    
    </div>
  );
}

export default Home;