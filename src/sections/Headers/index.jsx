
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../contents/header";

function Headers() {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl text-primaryB font-bold">
        {data.name}
      </div>
      <div className="font-semibold text-gray-400">
        {data.title}
      </div>
      <div className="text-primaryA text-sm w-5/6">
        {data.caption}
      </div>
      <div className="mt-4">
        <a href={data.link} target="_blank">
          <span className="rounded-md bg-primaryB text-gray-200 py-2 px-4">
            {data.btnText}
            <span className=" inline-block ml-2 pb-2 text-sm">
              <FontAwesomeIcon
                className="animate-bounce"
                icon={faArrowAltCircleDown}
              />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Headers;
