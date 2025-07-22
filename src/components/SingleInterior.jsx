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
import { useLocation, useParams } from "react-router-dom";
import CommonCard from "./CommonCard";

// @TODO:- Add Autoplay
const SingleInterior = () => {
  const location = useLocation();
  const images = location.state?.data || [];
  return (
    <div className="w-full h-full">
      <div className="px-4 xl:px-32    py-16 ">
        <div className="w-full h-full flex flex-col  gap-5  md:gap-7 lg:gap-3 md:px-5 ">
          <div className="w-full  border-b-2 md:border-r-2 rounded-md border-b-dark-green p-2">
            {/* ---large devices */}
            <div className="hidden md:grid grid-cols-3 gap-2 ">
              {images.map((projectPhoto) => (
                <CommonCard key={projectPhoto}>
                  <img
                    src={projectPhoto}
                    className="w-full h-full object-cover rounded-md"
                  />
                </CommonCard>
              ))}
            </div>
            {/* ---small devices */}
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
                {images.map((projectPhotos) => (
                  <CarouselItem key={projectPhotos}>
                    <Card className=" border-none ">
                      <CardContent className="w-full h-[300px] md:h-[500px]  p-0 rounded-md">
                        <div className=" overflow-hidden w-full h-full group">
                          <img
                            src={projectPhotos}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className=" absolute !left-4" />
              <CarouselNext className=" absolute right-4" />
            </Carousel>
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
