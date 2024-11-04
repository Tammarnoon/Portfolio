/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TitleLink = ({isHighLight,title,link}) => {
  if (!title) {
    return null; 
  }

    if(!link){
        return <div className={`text-primaryA font-semibold text-xl ${isHighLight ? "text-primaryB" : ""}`}>{title}</div>
    }

  return (
    
    <div className={`text-primaryA font-semibold text-xl ${isHighLight ? "text-primaryB" : ""}`}>
        <a href={link} target="_blank">
        {title}
        <FontAwesomeIcon className={`text-sm -rotate-45 transition-all ease-out ml-2 mb-1
            ${isHighLight ?  "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight}/>
        </a>
    </div>
  )
}

export default TitleLink