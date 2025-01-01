import PremiumPhoto from "../assets/premium_photo-.avif";
import { Button } from "./ui/button";
const Banner = () => {
  const handleScrollToContact = () => {
    const contactus = document.getElementById("contactUs")
    if (contactus) contactus.scrollIntoView({behavior:"smooth"});
  }
  return (
    <section id="home" className="flex flex-col-reverse sm:flex-row w-full h-full bg-dark-green font-montserrat">
      <div className=" w-full sm:w-1/3 ">
        <div className="h-full px-4 md:px-6 lg:px-8 py-4 md:py-8  lg:py-12 text-white flex flex-col justify-end gap-5">
          {/* --header-- */}
          <div className="hidden font-orbitron text-6xl lg:text-7xl xl:text-8xl  py-3 xl:py-9 relative z-10  tracking-widest sm:flex flex-col gap-1">
            <span>Design</span>
            <span>Interior</span>
          </div>
          {/* --description */}
          <p className=" text-xs block md:hidden  lg:block  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            hic quasi voluptates facere minus ipsum? Consequuntur velit rem
          </p>
          {/* --button */}
          <Button onClick={handleScrollToContact} className="bg-mango-orange text-white py-2 rounded-lg">
            Request Consulation
          </Button>
        </div>
      </div>
      <div className="w-full h-full  sm:w-2/3">
        <div className="relative h-full">
          <div className="block  absolute inset-0 z-10 bg-dark-green/25 bg-transparent"></div>
          <img src={PremiumPhoto} className="w-full h-full object-cover " />
          <div className="sm:hidden absolute px-4 z-10 text-white bottom-9 font-orbitron flex flex-col items-start text-4xl">
            <span className=" tracking-widest">Design</span>
            <span className=" tracking-widest">Interior</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
