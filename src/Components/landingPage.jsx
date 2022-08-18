import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./nav/nav";
import "./layout.css";
const Header = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useLayoutEffect(() => {
    if (sessionStorage.getItem("loaded") === "true") {
      setLoaded(true);
    } else {
      setLoaded(false);
      sessionStorage.setItem("loaded", true);
    }
  }, []);
  return (
    <>
      <div className="menu" onClick={() => setOpen(true)}></div>
      <div className={loaded ? "profilePicLoaded" : "profilePic"}></div>
      <h1 className={loaded ? "titleLoaded" : "title"}>
        "Hello World" My Name Is Shantanu Das
      </h1>
      <p className={loaded ? "tagLineLoaded" : "tagLine"}>
        Trying To Build Future But Not Just For Me
      </p>
      <nav>
        <button
          className={loaded ? "navOptionsLoaded glass" : "navOptions glass"}
          style={{ [`--i`]: "0.25s" }}
          onClick={() => navigate("./projects")}
        >
          Projects
        </button>
        <button
          className={loaded ? "navOptionsLoaded glass" : "navOptions glass"}
          style={{ [`--i`]: ".5s" }}
          onClick={() => navigate("./skills")}
        >
          Skills
        </button>
        <button
          className={loaded ? "navOptionsLoaded glass" : "navOptions glass"}
          style={{ [`--i`]: ".75s" }}
          onClick={() => navigate("./about")}
        >
          About
        </button>
        <button
          className={loaded ? "navOptionsLoaded glass" : "navOptions glass"}
          style={{ [`--i`]: "1s" }}
        >
          Contact
        </button>
      </nav>

      <Nav open={open} setOpen={(v) => setOpen(v)} />
    </>
  );
};

export default Header;
