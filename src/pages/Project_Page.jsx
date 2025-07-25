import { data, Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import PremiumPhoto from "../assets/premium_photo-.avif";
import Govinda1 from "../assets/hospitality/govinda1.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import CommonCard from "../components/CommonCard";
import Autoplay from "embla-carousel-autoplay";
import { commericalProjectsLinks, hospalityProjectsLinks, residentionalProjectsLinks } from "../constants/index.js";

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
  console.log(commericalProjectsLinks?.length);
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

      {/* Create a Separate Component */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 ">
          <span className="text-xl md:text-2xl font-montserrat font-medium">
            Commerical Project's
          </span>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              plugins={[
                // Autoplay({
                //   delay: 2500,
                // }),
              ]}
              className="w-full h-full"
            >
              <CarouselContent>
                {commericalProjectsLinks.map((commericalProject) => (
                  <CarouselItem
                    key={commericalProject?.url}
                    className="   md:basis-1/3 sm:basis-1/2 "
                  >
                    <div className="p-1">
                      <Link to={`/project/${commericalProject?.url}` } state={{ data: commericalProject?.photos }}>
                        <CommonCard>
                          <div className="relative overflow-hidden  w-full h-full group">
                            <img
                              src={commericalProject?.coverPhoto}
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
                        </CommonCard>
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute md:hidden md:right-20 right-11 -top-5">
                <CarouselPrevious className="hover:bg-mango-orange bg-dark-green text-white hover:text-white border-none cursor-pointer" />
                <CarouselNext className="hover:bg-mango-orange bg-dark-green text-white hover:text-white border-none cursor-pointer" />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <span className="text-xl md:text-2xl font-montserrat font-medium">
            Residentional Project's
          </span>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              plugins={[
                // Autoplay({
                //   delay: 3000,
                // }),
              ]}
              className="w-full h-full"
            >
              <CarouselContent>
                {residentionalProjectsLinks?.map((residentionalProject) => {
                  return <CarouselItem
                    key={residentionalProject?.url}
                    className=" md:basis-1/3 sm:basis-1/2 "
                  >
                    <div className="p-1">
                      <Link to={`/project/${residentionalProject?.url}`} state={{data:residentionalProject?.photos}}>
                        <CommonCard>
                          <div className="relative overflow-hidden  w-full h-full group">
                            <img
                              src={residentionalProject?.coverPhoto}
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
                        </CommonCard>
                      </Link>
                    </div>
                  </CarouselItem>;
                })}
              </CarouselContent>
              <div className="absolute md:hidden md:right-20 right-11 -top-5">
                <CarouselPrevious className="hover:bg-mango-orange bg-dark-green text-white hover:text-white border-none cursor-pointer" />
                <CarouselNext className="hover:bg-mango-orange bg-dark-green text-white hover:text-white border-none cursor-pointer" />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <span className="text-xl md:text-2xl font-montserrat font-medium">
            Hospitality Project's
          </span>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              plugins={[
                // Autoplay({
                //   delay: 3500,
                // }),
              ]}
              className="w-full h-full"
            >
                 <CarouselContent>
                {hospalityProjectsLinks.map((hospitalityProject) => (
                  <CarouselItem
                    key={hospitalityProject?.url}
                    className="   md:basis-1/3 sm:basis-1/2 "
                  >
                    <div className="p-1">
                      <Link to={`/project/${hospitalityProject?.url}` } state={{ data: hospitalityProject?.photos }}>
                        <CommonCard>
                          <div className="relative overflow-hidden  w-full h-full group">
                            <img
                              src={hospitalityProject?.coverPhoto}
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
                        </CommonCard>
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute md:hidden md:right-20 right-11 -top-5">
                <CarouselPrevious className="hover:bg-mango-orange bg-dark-green text-white hover:text-white border-none cursor-pointer" />
                <CarouselNext className="hover:bg-mango-orange bg-dark-green text-white hover:text-white border-none cursor-pointer" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
