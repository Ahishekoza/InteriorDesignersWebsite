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
import { useState } from "react";

const MobileMenu = () => {
  // State to manage whether the sheet is open
  // const [isOpen, setIsOpen] = useState(false);

  // const closeSheet = () => setIsOpen(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoMenu className="block cursor-pointer text-3xl md:hidden font-extrabold" />
      </SheetTrigger>
      <SheetContent
        className="bg-dark-green/90 text-white"
        // Close the sheet when clicking outside
      >
        <SheetHeader>
          <SheetTitle className="text-base text-white md:text-xl text-left font-orbitron tracking-widest">
            INNOVA INTERIORS
          </SheetTitle>
        </SheetHeader>
        <div className="my-10 flex flex-col gap-6 text-md font-montserrat">
          <MobileNavStyle>
            <Link
              to={"/"}
              // Close the sheet after clicking this link
              className="relative block px-2 py-1 group-hover:text-dark-green z-10 group-hover:font-semibold text-white transition-colors duration-300"
            >
              Home
            </Link>
          </MobileNavStyle>
          <MobileNavStyle>
            <Link
              to={"/projects"}
              // Close the sheet after clicking this link
              className="relative block px-2 py-1 group-hover:text-dark-green z-10 group-hover:font-semibold text-white transition-colors duration-300"
            >
              Projects
            </Link>
          </MobileNavStyle>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
