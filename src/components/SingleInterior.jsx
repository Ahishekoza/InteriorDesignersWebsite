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

// @TODO:- Add Autoplay
const SingleInterior = () => {
  return (
    <div className="w-full h-full">
      <div className="px-4 xl:px-32    py-16 ">
        <div className="w-full h-full flex flex-col lg:flex-row gap-5  md:gap-7 lg:gap-3 ">
          <div className="w-full lg:w-4/5 border-b-2 md:border-r-2 rounded-md border-b-dark-green p-2">
            <Carousel className="w-full h-full ">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card className=" border-none ">
                      <CardContent className="w-full h-[300px] md:h-[500px]  p-0 rounded-md">
                        <div className=" overflow-hidden w-full h-full group">
                          <img
                            src={"/src/assets/premium_photo-.avif"}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className=" absolute left-4" />
              <CarouselNext className=" absolute right-4" />
            </Carousel>
          </div>
          <div className="lg:w-1/5 w-full">
            <div className="p-2 flex flex-col gap-4 font-montserrat">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in eius cumque hic</h1>
              <Separator className=" border border-dark-green"/>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat exercitationem earum molestiae mollitia excepturi cumque cor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInterior;
