import { createContext, useEffect, useState } from "react";
// Construction-Project-of-a-Post-Office-Building-in-Qalyubia
import img1proj1 from "/projectsPage/Post-Office-Building/01.webp";
import img2proj1 from "/projectsPage/Post-Office-Building/02.webp";
// Faculty-of-Computers-and-Artificial-Intelligence-Benha-University
import img1 from "/projectsPage/FCI/01.jpg";
import img2 from "/projectsPage/FCI/02.jpg";


export let ProjectsContext = createContext();

export default function ProjectsContextProvider({ children }) {
  const projects = [
    {
      id: 0,
      title: "Construction Project of a Post Office Building in Qalyubia",
      images: [img1proj1, img2proj1],
      shortDescription:
        "Construction of the Faculty of AI and Computer Science at Benha University...",
      fullDescription: `Owner: Benha University\nConsultant: Engineering Department, Benha University\nStart Date: ...\nContract Value: ...\nProject Description: Construction of AI & CS Faculty (6 floors)\nScope of Work:\n• Structural Works\n• Interior & Exterior Finishes\n• Electromechanical Works\n• Landscaping Works`,
    },
    {
      id: 1,
      title: "AI & Computer Science Building - Benha University",
      images: [img1, img2],
      shortDescription:
        "Construction of the Faculty of AI and Computer Science at Benha University...",
      fullDescription: `Owner: Benha University\nConsultant: Engineering Department, Benha University\nStart Date: ...\nContract Value: ...\nProject Description: Construction of AI & CS Faculty (6 floors)\nScope of Work:\n• Structural Works\n• Interior & Exterior Finishes\n• Electromechanical Works\n• Landscaping Works`,
    },
  ];
  return (
    <>
      <ProjectsContext.Provider value={{projects}}>
        {children}
      </ProjectsContext.Provider>
    </>
  );
}
