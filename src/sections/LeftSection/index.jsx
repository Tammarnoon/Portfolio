/* eslint-disable react/prop-types */
import Headers from "../Headers";
import Navbar from "../Navbar";
import Contacts from "../Contacts";

const LeftSction = ({navbarItem, currentSection}) => {
  return (
    <div className="px-5">
      <div className="sticky top-10 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[85vh]">
        <Headers />
        <Navbar 
          navbarItem = {navbarItem} currentSection = {currentSection}
        />
        <Contacts />
      </div>
    </div>
  );
};

export default LeftSction;
