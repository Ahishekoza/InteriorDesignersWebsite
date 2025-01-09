import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import { Dialog, DialogContent } from "../components/ui/dialog";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "./ui/button";
import { customDesignContentLinks } from "../constants";
import CommonCard from "./CommonCard";

const CustomDesigns = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCarouselVideoOpen, setIsCarouselVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);


  return (
    <div className="w-full h-full my-16 bg-dark-green">
      <div className="px-4 md:px-6 lg:px-8 py-6 ">
        {/* Heading */}
        <div className="flex flex-col gap-2 font-orbitron items-start text-4xl text-white md:text-6xl md:mb-8 mb-9">
          <span>
            CUSTOM <span className="text-mango-orange">DESIGN</span>
            FOR
          </span>
          <span>ALL NEEDS</span>
        </div>
        {/* Carousel */}
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full h-full"
          >
            <CarouselContent>
              {customDesignContentLinks.map((video) => (
                <CarouselItem
                  key={video.id}
                  className="sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    {/* Smaller Devices: ReactPlayer within Card */}
                    <CommonCard customClass={"block md:hidden"}>
                      <>
                        {isCarouselVideoOpen &&
                        selectedVideo === video.videoUrl ? (
                          <ReactPlayer
                            url={video.videoUrl}
                            playing={true}
                            controls={true}
                            width="100%"
                            height="100%"
                          />
                        ) : (
                          <>
                            <div className="relative overflow-hidden w-full h-full group">
                              <img
                                src={video.thumbnail}
                                className="w-full h-full object-cover rounded-md"
                                alt={video.title}
                              />
                              {/* Dark-opacity background on hover */}
                              <div className="absolute inset-0 bg-dark-green/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                              {/* Text content with slide-up effect */}
                              <div className="absolute inset-0 translate-y-36 group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-start justify-end p-3 transition-transform duration-300">
                                <h3 className="text-xl font-orbitron text-white">
                                  {video.title}
                                </h3>
                                <p className="mt-1.5 text-pretty text-xs text-white ">
                                  {video.description}
                                </p>
                                <Button
                                  onClick={() => {
                                    setIsCarouselVideoOpen(true);
                                    setSelectedVideo(video.videoUrl);
                                  }}
                                  className="bg-dark-green text-white mt-1"
                                >
                                  Click to view more
                                </Button>
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    </CommonCard>

                    {/* Larger Devices: Dialog for Video */}

                    <CommonCard customClass={"hidden md:block"}>
                      <div className="relative overflow-hidden w-full h-full group">
                        <img
                          src={video.thumbnail}
                          className="w-full h-full object-cover rounded-md"
                          alt={video.title}
                        />
                        {/* Dark-opacity background on hover */}
                        <div className="absolute inset-0 bg-dark-green/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                        {/* Text content with slide-up effect */}
                        <div className="absolute inset-0 translate-y-36 group-hover:translate-y-0 z-10 font-montserrat flex flex-col items-start justify-end p-3 transition-transform duration-300">
                          <h3 className="text-xl font-orbitron text-white">
                            {video.title}
                          </h3>
                          <p className="mt-1.5 text-pretty text-xs text-white ">
                            {video.description}
                          </p>
                          <Button
                            onClick={() => {
                              setIsOpen(true);
                              setSelectedVideo(video.videoUrl);
                            }}
                            className="bg-dark-green text-white mt-1"
                          >
                            Click to view more
                          </Button>
                        </div>
                      </div>
                    </CommonCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute md:right-20 right-11 -top-5">
              <CarouselPrevious className="hover:bg-mango-orange hover:text-white border-none cursor-pointer" />
              <CarouselNext className="hover:bg-mango-orange hover:text-white border-none cursor-pointer" />
            </div>
          </Carousel>
          {/* Dialog for Videos */}
          <Dialog
            open={isOpen}
            onOpenChange={(open) => {
              setIsOpen(open);
              if (!open) setSelectedVideo(null); // Reset video when dialog is closed
            }}
            className="hidden md:block"
          >
            <DialogContent className="max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px] h-[50%] xl:h-[80%]">
              {selectedVideo && (
                <ReactPlayer
                  url={selectedVideo}
                  playing={true}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CustomDesigns;
