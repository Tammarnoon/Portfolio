/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const nav = [
  { title: "About Me", sectionId: "About Me-section" },
  { title: "Education", sectionId: "Education-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Project", sectionId: "Project-section" },
];


const Navbar = ({navbarItem, currentSection}) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth"})
    console.log(sectionId);
    
  }


  return (
    <div className="hidden lg:flex flex-col text-sm mt-10">

        {
          navbarItem.map((e,i)=>( 
            <div key={`nav-${e}-${i}`}
              onClick={()=> handleClick(e.sectionId)}
              className="cursor-pointer flex py-2"
              onMouseEnter={() => setIsMouseEnter({[e.title]: true})}
              onMouseLeave={() => setIsMouseEnter({[e.title]: false})}
            >
              <div>
                <FontAwesomeIcon 
                className={`mr-2 arrowSpawn 
                ${currentSection === e.sectionId ? "text-primaryB" : isMouseEnter[e.title] ? "" : "hidden" }`} icon={faArrowRight} />
              </div>
              
                <div className={`${currentSection === e.sectionId || 
                  isMouseEnter[e.title] ? "translate-x-3" : ""} duration-300 ease-out`}>{e.title}</div>
            </div>
          ))
        }

    </div>
  );
};

export default Navbar;
