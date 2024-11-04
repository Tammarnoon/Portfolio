/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FomattedDate from "../FomattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Meatrial from "../Meatrial";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
    onInitial,
    title: sectionTItle = "",
    data = [],
}) => {
    
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    
    const SECTION_ID = `${sectionTItle}-section`;

    useEffect(()=>(
      onInitial(SECTION_ID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ),[])
  return (
    <div id={SECTION_ID} className="scroll-m-14">
      <div className="text-gray-400 font-bold">{sectionTItle}</div>
      {
          data.map(({ date, title, link, description, material, skill,picture }, index) => (

            <div
              key={`${SECTION_ID}-${index}-${title.replaceAll(" ","")}`}
              className={`grid grid-cols-[25%_75%] rounded-xl px-2 py-5 duration-500 ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primarySubBG" : ""}`}
              onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
              onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
            >
              <div>
                <div className="grid gap-4">
                  <FomattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FomattedDate>
                  <Picture picture={picture} title={title} />
                </div>
              </div>
              <div className="grid gap-y-4">

                <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
                
                  {
                    material.length > 0 ?
                    <div className="text-gray-500 flex gap-4 text-xl items-center">
                      {
                        material.map((e, i) => (
                          <Meatrial key={`${e}-material-${i}`} icon={e.type} link={e.link}/>
                        ))
                      }
                    </div>

                    :null
                  }

                  {
                    description.map((e, i) => (
                      <Description key={`${e}-description-${i}`} description ={e} />
                    ))
                  }
                  {
                    skill.map((e, i) => (
                      <Tech  key={`${e}-skill-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                    ))
                  }
          
              </div>
            </div>
          ))
          
      }

  
      
    </div>
  );
}

export default ContentContainer