import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// eslint-disable-next-line react/prop-types
const Meatrial = ({icon, link}) => {
  return (

    <a href={link} target="_blank" className="hover:scale-125"><FontAwesomeIcon icon={icon} /> </a>  

  )
}

export default Meatrial