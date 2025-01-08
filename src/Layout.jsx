/* eslint-disable react/prop-types */
// import Breadcrumb from "./components/Breadcrumb";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const RemoteLayout = ({ children }) => {
  const [showScrollArrow, setShowScrollArrow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const checkScrollYOffset = () => {
    // console.log("width:", window.innerWidth,"height:", window.innerHeight*0.75);
    if (window.pageYOffset >= window.innerHeight*0.4) {
      setShowScrollArrow(true);
    } else {
      setShowScrollArrow(false);
    }
  };

  window.addEventListener("scroll", checkScrollYOffset);

  return (
    <div className="scroll-smooth cursor-grab">
      <Header />
      {/* <Breadcrumb/> */}
      <main>{children}</main>
      <Footer />
      {/* --Scroll Button Implementation */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-14 right-1 bg-dark-green hover:bg-dark-green/85 transition-all duration-150 text-white cursor-pointer p-1 rounded-full shadow-md"
        style={{display: showScrollArrow ? 'block' : 'none'}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default RemoteLayout;
