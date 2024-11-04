import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacts = () => {
  return (
    
    <div className="flex items-end gap-5 text-2xl">
      <a href="https://github.com/Tammarnoon" target="_blank">
      <FontAwesomeIcon
        className="hover:scale-125 hover:text-primaryA transition-all"
        icon={faGithub}
      />
      </a>

      
    </div>
  );
};

export default Contacts;
