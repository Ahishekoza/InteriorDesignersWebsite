import { IoMenu } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const location = useLocation();
  const projectHeader =
    location.pathname.split("/").includes("projects") ||
    location.pathname.split("/").includes("project");

  const menuItems = [
    { id: 1, link: "/", item: "Home" },
    { id: 2, link: "#aboutUs", item: "AboutUs" },
    { id: 3, link: "/projects", item: "Projects" },
    { id: 4, link: "#contactUs", item: "ContactUs" },
  ];

  const getActiveClass = (path) => {
    if (path === "/") {
      return "text-white";
    }

    if (path.startsWith("#")) {
      return window.location.hash === path ? "text-mango-orange" : "text-white";
    } else {
      return location.pathname === path ? "text-mango-orange" : "text-white";
    }
  };
  const instaLink = "";
  const youtubeLink = "https://www.youtube.com/@innovainteriordesigners";

  // ---Header for Project Page
  if (projectHeader) {
    return (
      <div className="  w-full bg-dark-green z-20 px-2 md:px-4 lg:px-8  rounded-b-lg">
        <div className="flex  justify-between md:text-lg lg:text-xl  items-center px-2 py-4 rounded-lg text-white ">
          <span className="font-orbitron  font-extrabold cursor-pointer">
            I<span className="inline-block text-red  rotate-6">NN</span>
            OVA
          </span>

          {/* --- Menu Items */}
          <div className="hidden md:flex items-center gap-9  font-montserrat font-medium">
            <div className="group relative flex flex-col">
              {/* <span className="scrollbarUnderline_project"></span> */}
            </div>
            {menuItems.map((menuItem) => {
              if (
                menuItem.item === "AboutUs" ||
                menuItem.item === "ContactUs"
              ) {
                return "";
              } else {
                return (
                  <Link
                    key={menuItem.id}
                    to={menuItem.link}
                    className={` ${getActiveClass(menuItem.link)}`}
                  >
                    {menuItem.item}
                  </Link>
                );
              }
            })}
          </div>
          {/*--- Icons */}
          <div className="hidden md:flex items-center  gap-5 font-montserrat">
            <a href={instaLink} target="_blank">
              <FaInstagram className="icon_project" />
            </a>
            <a href={youtubeLink} target="_blank">
              <FaYoutube className="icon_project" />
            </a>
          </div>

          <div className="block md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" absolute w-full top-5 z-20 px-2 md:px-4 lg:px-8 ">
        <div className="flex  justify-between md:text-lg lg:text-xl  items-center  md:bg-white md:bg-opacity-40 px-2 py-3 rounded-lg text-white ">
          <span className="font-orbitron  font-extrabold cursor-pointer">
            I<span className="inline-block text-red  rotate-6">NN</span>
            OVA
          </span>

          {/* --- Menu Items */}
          <div className="hidden md:flex items-center gap-9  font-montserrat font-medium">
            {menuItems.map((menuItem) => {
              if (
                menuItem.item === "AboutUs" ||
                menuItem.item === "ContactUs"
              ) {
                return (
                  <a
                    key={menuItem.id}
                    href={menuItem.link}
                    className={` ${getActiveClass(menuItem.link)}`}
                  >
                    {menuItem.item}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={menuItem.id}
                    to={menuItem.link}
                    className={` ${getActiveClass(menuItem.link)}`}
                  >
                    {menuItem.item}
                  </Link>
                );
              }
            })}
          </div>
          {/*--- Icons */}
          <div className="hidden md:flex items-center  gap-5 font-montserrat">
            <a href={instaLink} target="_blank">
              <FaInstagram className="icon" />
            </a>
            <a href={youtubeLink} target="_blank">
              <FaYoutube className="icon" />
            </a>
          </div>

          <div className="block md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
