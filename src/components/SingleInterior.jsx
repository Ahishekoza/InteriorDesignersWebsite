import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay"
import { Separator } from "./ui/separator";
import PremiumPhoto from "../assets/premium_photo-.avif";
import Autoplay from "embla-carousel-autoplay";
import CommonCard from "./CommonCard";
import ReactPlayer from "react-player";

// @TODO:- Add Autoplay
const SingleInterior = ({ imagesInfo }) => {
  return (
    <div className="w-full h-full">
      <div className="px-4 xl:px-32    py-16 ">
        <div className="w-full h-full flex flex-col  gap-5  md:gap-7 lg:gap-3 md:px-5 ">
          <div className="w-full  border-b-2 md:border-r-2 rounded-md border-b-dark-green p-2">
            {/* ---large devices */}
            {imagesInfo?.length > 1 ? (
              <div className="hidden md:grid grid-cols-3 gap-2 ">
                {imagesInfo?.map((project) => (
                  <CommonCard key={project?.image}>
                    <img
                      src={project?.image}
                      className="w-full h-full object-cover rounded-md"
                    />
                    {/* Dark-opacity background on hover */}
                    <div className="absolute inset-0 bg-dark-green/70 opacity-50 rounded-md"></div>
                    <div className="absolute inset-0  h-full  z-10 font-montserrat top-[80%] p-3 ">
                      <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                        <span>{project?.roomName}</span>
                      </h3>
                    </div>
                  </CommonCard>
                ))}
              </div>
            ) : (
              <div className="hidden md:block">
                <CommonCard customContentClass={"!h-[400px]"}>
                  <ReactPlayer
                    url={imagesInfo[0]}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                </CommonCard>
              </div>
            )}
            {/* ---small devices */}
            {imagesInfo?.length > 1 ? (
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full h-full block md:hidden  "
              >
                <CarouselContent>
                  {imagesInfo.map((project) => (
                    <CarouselItem key={project?.image}>
                      <CommonCard customContentClass={"!h-[400px]"}>
                        <img
                          src={project?.image}
                          className="w-full h-full object-cover rounded-md"
                        />
                        {/* Dark-opacity background on hover */}
                        <div className="absolute inset-0 bg-dark-green/70 opacity-50 rounded-md"></div>
                        <div className="absolute inset-0  h-full  z-10 font-montserrat top-[80%] p-3 ">
                          <h3 className="text-xl font-montserrat text-white flex items-center gap-1">
                            <span>{project?.roomName}</span>
                          </h3>
                        </div>
                      </CommonCard>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className=" absolute !-left-4" />
                <CarouselNext className=" absolute -right-4" />
              </Carousel>
            ) : (
              <div className="block md:hidden">
                <CommonCard customContentClass={"!h-[400px]"}>
                  <ReactPlayer
                    url={imagesInfo[0]}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                </CommonCard>
              </div>
            )}
          </div>
          <div className="w-full">
            <div className="p-2 flex flex-col gap-4 font-montserrat">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in
                eius cumque hic
              </h1>
              <Separator className=" border border-dark-green" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat exercitationem earum molestiae mollitia excepturi
                cumque cor
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInterior;
