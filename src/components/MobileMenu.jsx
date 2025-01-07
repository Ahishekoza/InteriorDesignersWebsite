import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Link } from "react-router-dom";
import MobileNavStyle from "./MobileNavStyle";
const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <IoMenu className="block cursor-pointer text-3xl  md:hidden font-extrabold" />
      </SheetTrigger>
      <SheetContent className="bg-dark-green/90 text-white">
        <SheetHeader>
          <SheetTitle className="text-left font-orbitron tracking-widest">
            INNOVA INTERIORS
          </SheetTitle>
        </SheetHeader>
        {/* The issue with the padding in the y-direction not being applied correctly likely arises from the absolute positioning of the background span (absolute inset-0) overlapping the padding */}
        {/* Adding block to the Link ensures it behaves like a block element, allowing py-2 to create vertical padding. */}
        <div className="my-10 flex flex-col gap-6 text-md font-montserrat">
          <MobileNavStyle>
            <Link
              to={"/"}
              className="relative block px-2 py-1 group-hover:text-dark-green z-10 group-hover:font-semibold text-white transition-colors duration-300"
            >
              Home
            </Link>
          </MobileNavStyle>
          {/* <MobileNavStyle>
            <a
              href="#aboutUs"
              className="relative block px-2 py-1 group-hover:text-dark-green z-10 group-hover:font-semibold text-white transition-colors duration-300"
            >
              About Us
            </a>
          </MobileNavStyle> */}
          <MobileNavStyle>
            <Link
              to={"/projects"}
              className="relative block px-2 py-1 group-hover:text-dark-green z-10 group-hover:font-semibold text-white transition-colors duration-300"
            >
              Projects
            </Link>
          </MobileNavStyle>

          {/* <span>Contact Us</span> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
