import PremiumPhoto from "../assets/premium_photo-.avif";
const AboutUs = () => {
  return (
    <section id="aboutUs" className="w-full h-full my-16">
      <div className="px-4 md:px-6 lg:px-8 ">
        {/* -- Heading */}
        <div className="flex flex-col gap-2 font-orbitron items-start text-4xl md:text-6xl mb-8">
          <span>WHO WE</span>
          <span>ARE ?</span>
        </div>
        {/* flex */}
        <div className="flex flex-col md:flex-row w-full  md:space-x-4 space-y-4 font-montserrat">
          <div className="md:w-1/2 w-full flex flex-col gap-3">
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quam vero soluta non sequi praesentium ea velit
              similique itaque illum corporis possimus accusamus reprehenderit
              labore recusandae deleniti quae, sint quidem! Voluptatibus amet
              hic iure, incidunt earum magni maxime deleniti non voluptate
              laboriosam voluptatem quasi illum sequi molestias, doloribus
              officia eius odit et ullam harum at voluptatum. Distinctio
              perspiciatis culpa itaque. 
            </p>
            <img
              src={PremiumPhoto}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-3">
          <img
              src={PremiumPhoto}
              className="hidden md:block h-full w-full object-cover rounded-md"
            />
          <p >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quam vero soluta non sequi praesentium ea velit
              similique itaque illum corporis possimus accusamus reprehenderit
              labore recusandae deleniti quae, sint quidem! Voluptatibus amet
              hic iure, incidunt earum magni maxime deleniti non voluptate
              laboriosam voluptatem quasi illum sequi molestias, doloribus
              officia eius odit et ullam harum at voluptatum. Distinctio
              perspiciatis culpa itaque.
            </p>
            <img
              src={PremiumPhoto}
              className="block md:hidden h-full w-full object-cover rounded-md"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
