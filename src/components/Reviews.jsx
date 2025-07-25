import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import PremiumPhoto from "../assets/premium_photo-.avif";
import CommonCard from "./CommonCard";
import Autoplay from "embla-carousel-autoplay";
const Reviews = () => {
  return (
    <div  className="w-full h-full my-16  ">
      <div className="px-4 md:px-6 lg:px-8 py-6 ">
        {/* Heading */}
        <div className=" font-orbitron items-start text-4xl text-dark-green md:text-6xl md:mb-16 mb-9">
          <span>REVIEWS</span>
        </div>

        {/* Carousel */}
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className=" sm:basis-1/2 ">
                  <div className="p-1">
                    <CommonCard
                      customClass={
                        "shadow-none border border-r-2 rounded-none border-l-0 border-b-0 border-t-0 border-dark-green"
                      }
                      customContentClass={"lg:h-[300px] h-[350px] p-5"}
                    >
                      <div className="flex flex-col gap-3 font-montserrat text-dark-green">
                        <div className="flex flex-row gap-10 items-center">
                          <img
                            src={PremiumPhoto}
                            className=" size-28 rounded-full object-cover"
                          />
                          <div className="flex  flex-col ">
                            <span className="text-lg font-orbitron ">Name</span>
                            <span className="text-md font-light">
                              Profession
                            </span>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quisquam quo eveniet nisi voluptates aperiam
                          dolorum doloremque, ab labore, optio atque officia
                          alias. A ut totam modi illo at, aperiam fugiat.
                        </p>
                      </div>
                    </CommonCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute md:right-20 right-11 -top-5">
              <CarouselPrevious className="hover:bg-mango-orange bg-dark-green text-white hover:text-white border-none cursor-pointer" />
              <CarouselNext className="hover:bg-mango-orange bg-dark-green text-white hover:text-white border-none cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
