/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../contents/about";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const About = ({onInitial,title}) => {

  const SECTION_ID = `${title}-section`;

    useEffect(()=>(
    onInitial(SECTION_ID)
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ),[])

  return (
    <div className="px-2">
      <div className="space-y-4 scroll-m-14" id={SECTION_ID}>
        <div className="text-gray-400 font-bold">{data.title}</div>
        <div>{data.description} </div>
        
        <div className="text-gray-400 font-bold">{data.skill}</div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">

          <div className="flex flex-col items-center w-24">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-5xl text-orange-500"
            />
            <span className="mt-2 text-sm font-semibold">HTML5</span>
          </div>
          <div className="flex flex-col items-center w-24">
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-5xl text-blue-500"
            />
            <span className="mt-2 text-sm font-semibold">CSS</span>
          </div>
          <div className="flex flex-col items-center w-24">
            <FontAwesomeIcon
              icon={faPhp}
              className="text-5xl text-purple-500"
            />
            <span className="mt-2 text-sm font-semibold">PHP</span>
          </div>

          <div className="flex flex-col items-center w-24">
            <FontAwesomeIcon
              icon={faJsSquare}
              className="text-5xl text-yellow-500"
            />
            <span className="mt-2 text-sm font-semibold">JavaScript</span>
          </div>
          <div className="flex flex-col items-center w-24">
            <FontAwesomeIcon
              icon={faNodeJs}
              className="text-5xl text-green-500"
            />
            <span className="mt-2 text-sm font-semibold">Node.js</span>
          </div>

          <div className="flex flex-col items-center w-24">
            <FontAwesomeIcon
              icon={faReact}
              className="text-5xl text-blue-400"
            />
            <span className="mt-2 text-sm font-semibold">React.js</span>
          </div>
          <div className="flex flex-col items-center w-24">
            <FontAwesomeIcon
              icon={faDatabase}
              className="text-5xl text-gray-700"
            />
            <span className="mt-2 text-sm font-semibold">MySQL</span>
          </div>
          <div className="flex flex-col items-center w-24">
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-5xl text-teal-500"
            />
            <span className="mt-2 text-sm font-semibold">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
