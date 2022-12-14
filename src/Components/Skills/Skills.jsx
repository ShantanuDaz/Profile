import React from "react";
import Header from "../Header/Header";
import SkillCard from "../skillCard/skillCard";
import "./Skills.css";
const Skills = () => {
  const skills = [
    {
      name: "Frontend",
      skills: [
        {
          name: "HTML",
          value: 80,
          description:
            "It is the langauage of web, the markup which make the elments in Web",
        },
        { name: "CSS", value: 70 },
        { name: "JavaScript", value: 60 },
        { name: "ReactJS", value: 60 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "NodeJS", value: 50 },
        { name: "ExpressJS", value: 40 },
        { name: "Java", value: 60 },
        { name: "Spring Boot", value: 50 },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "MySQL", value: 50 },
        { name: "MonogoDB", value: 30 },
      ],
    },
    {
      name: "Desgin",
      skills: [{ name: "UI/UX", value: 20 }],
    },
  ];
  return (
    <>
      <Header />
      <div className="skills">
        {skills.map((item, index) => {
          return (
            <div key={index} className="skillCatergory">
              <h2>{item.name}</h2>
              {item.skills.map((skill, index2) => {
                return (
                  <SkillCard
                    key={index2}
                    name={skill.name}
                    value={skill.value}
                    description={skill.description}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
