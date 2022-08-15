import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "../modal/Modal";
import "./skillCard.css";
const SkillCard = ({ name = "", value = 0, description = "" }) => {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    move(value);
    getRandomColor();
  }, [value]);
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
    <>
      <div className="skillCard glass" onClick={() => setOpen(true)}>
        <p>{name}</p>
        <div
          style={{
            // eslint-disable-next-line
            ["--widthValue"]: `${progress}%`,
            backgroundColor: color,
          }}
          className="skillValue"
        >
          {progress}
        </div>
      </div>
      <Modal
        open={open}
        close={() => {
          setOpen(false);
        }}
      >
        <div className="skillDesc glass">
          <p>{name}</p>
          <div
            style={{
              // eslint-disable-next-line
              ["--widthValue"]: `${progress}%`,
              backgroundColor: color,
            }}
            className="skillValue"
          >
            {progress}
          </div>
          {description}
        </div>
      </Modal>
    </>
  );
};

export default SkillCard;
