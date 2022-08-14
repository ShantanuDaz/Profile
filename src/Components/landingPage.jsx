import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./nav/nav";
import "./layout.css";
const Header = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="menu" onClick={() => setOpen(true)}></div>
      <div className="profilePic"></div>
      <h1>"Hello World" My Name Is Shantanu Das</h1>
      <p>Trying To Build Future But Not Just For Me</p>
      <nav>
        <button
          className="glass"
          style={{ [`--i`]: "0.25s" }}
          onClick={() => navigate("./projects")}
        >
          Projects
        </button>
        <button
          className="glass"
          style={{ [`--i`]: ".5s" }}
          onClick={() => navigate("./skills")}
        >
          Skills
        </button>
        <button className="glass" style={{ [`--i`]: ".75s" }}>
          About
        </button>
        <button className="glass" style={{ [`--i`]: "1s" }}>
          Contact
        </button>
      </nav>

      <Nav open={open} setOpen={(v) => setOpen(v)} />
    </>
  );
};

export default Header;
