import CustomDesigns from "../components/CustomDesigns";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Reviews from "../components/Reviews";
import CompletedProjects from "../components/CompletedProjects";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen ">
      {/* --Banner-- */}
      <Banner />
      {/* --About Us */}
      <section id="aboutUs">
        <AboutUs />
      </section>
      {/* ---Custom Designs */}

      <CustomDesigns />

      {/* ---Reviews */}
      <Reviews />
      {/* ---CompletedProjects */}
      <CompletedProjects />
    </div>
  );
};

export default HomePage;
