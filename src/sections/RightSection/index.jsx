/* eslint-disable react/prop-types */
import ContentContainer from "../../components/ContentContrainer";
import { data as projectData } from "../../contents/project";
import { data as expData } from "../../contents/experience";
import { data as eduData } from "../../contents/education";
import About from "../About";
import Footer from "../footer.jst";

const RightSection = ({ onInitial }) => {
  
  return (
    <div className="grid gap-y-40 px-3">
      <About 
      title = "About Me"
      onInitial = {onInitial}
      />

      <ContentContainer
      onInitial = {onInitial}
      title="Education"
      data = {eduData}
      />
      
      <ContentContainer
      onInitial = {onInitial}
      title="Experience"
      data = {expData}
      />
      
      <ContentContainer
      onInitial = {onInitial}
      title="Project"
      data = {projectData}
      />

      <Footer />
    </div>
  );
};

export default RightSection;
