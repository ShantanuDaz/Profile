import React, { useState } from "react";
import { useEffect } from "react";
import "./skillCard.css";
const SkillCard = ({ name, value }) => {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("");
  useEffect(() => {
    move(value);
    getRandomColor();
  }, []);
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  };

  function move(value) {
    let width = 0;
    var id = setInterval(frame, 1);
    function frame() {
      if (width >= value) {
        clearInterval(id);
      } else {
        width++;
        setProgress(() => width);
      }
    }
  }
  return (
    <div className="skillCard glass">
      <p>{name}</p>
      <div
        style={{
          ["--widthValue"]: `${progress}%`,
          backgroundColor: color,
        }}
        className="skillValue"
      >
        {progress}
      </div>
    </div>
  );
};

export default SkillCard;
