import React from "react";
import Header from "../Header/Header";
import "./Projects.css";

const Projects = () => {
  const projectsData = [
    {
      name: "SabKuch.com",
      img: "",
      description: "A place to bug anything",
    },
  ];

  return (
    <>
      <Header />
      <div className="projects">
        {projectsData.map((item, index) => {
          return (
            <div key={index} className="glass">
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
