/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import LeftSction from "./sections/LeftSection";
import RightSection from "./sections/RightSection";


function App() {
  const [sectionId, setSectionId] = useState([]);
  const [navbarItem, setNavbarItem] = useState([]);
  const [currentSection, setCurrentSection] = useState([]);


  const addSectionId = (sectionId) => {
    
     const elementId = document.getElementById(sectionId).id
     setSectionId((prev) => [ ...new Set ([...prev, elementId])])
     
     const elementTitle = document.getElementById(sectionId).childNodes[0].textContent

     const obj = {title: elementTitle, sectionId: elementId}
     setNavbarItem((prev) => {
      if(prev.findIndex(e => e.title === obj.title) < 0){
        return [...prev, obj]
      }
      return prev
     })
  }

  const handleScroll = () => {
    for (let index = 0; index < sectionId.length; index++) {
      const element = sectionId[index];

      const top = document.getElementById(element).getClientRects()[0].y;
      const height = document.getElementById(element).getClientRects()[0].height * 0.5;
      const viewHeight = window.innerHeight * 0.3;
      
      if(top <= 0){
        if(top + height)
        setCurrentSection(element)
      }else if(top > 0 && top < viewHeight){
        setCurrentSection(element)
      }
    }
    
  }
  
  useEffect(() => {
      if (sectionId.length > 0) {
        setCurrentSection(sectionId[0])
      }
  }, [sectionId])

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [sectionId])

  return (
    <div className="mt-10 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">

      <LeftSction navbarItem = {navbarItem} currentSection={currentSection}/>

      <RightSection onInitial={addSectionId}/>
    </div>
  );
}

export default App;
