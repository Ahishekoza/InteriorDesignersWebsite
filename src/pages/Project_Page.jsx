import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { MdArrowOutward } from "react-icons/md";

// @TODO:-- Add border none
// @TODO:- create an array of objects for interior site samples

// objectSchema ={
//   type:"",
//   thumbnail:"",
//   subImages:"",
//   name:"" #project/ site
//   location:""

// }

const ProjectPage = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-6 ">
      {/* --Heading */}
      <div className="flex flex-col gap-1 font-orbitron items-start text-4xl text-dark-green md:text-5xl lg:text-6xl md:mb-16 mb-9">
        <span>
          DISCOVER OUR <span className="text-mango-orange">MODERN</span>
        </span>
        <span>
          <span className="text-mango-orange">ELEGANCE </span>
          PROJECT'S
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6  ">
        <Link to={"/project/commerical"}>
          <Card className=" cursor-pointer">
            <CardContent className="w-full h-[300px] relative p-0 rounded-md">
              <div className="relative overflow-hidden  w-full h-full group">
                <img
                  src={"/src/assets/premium_photo-.avif"}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Dark-opacity background on hover */}
                <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
                {/* Text content with slide-up effect */}
                <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                  <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                    <span>View</span> <MdArrowOutward />
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className=" cursor-pointer">
          <CardContent className="w-full h-[300px] relative p-0 rounded-md">
            <div className="relative overflow-hidden  w-full h-full group">
              <img
                src={"/src/assets/premium_photo-.avif"}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Dark-opacity background on hover */}
              <div className="absolute inset-0 bg-dark-green/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-md"></div>
              {/* Text content with slide-up effect */}
              <div className="absolute inset-0 translate-y-48 h-full group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-center justify-center p-3 transition-transform duration-300">
                <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                  <span>View</span> <MdArrowOutward />
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectPage;
