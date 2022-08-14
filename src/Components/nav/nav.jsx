import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ open, setOpen }) => {
  let navigate = useNavigate();
  return (
    open && (
      <div className="modal" onClick={() => setOpen(false)}>
        <nav className="showNav ">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/projects");
            }}
            className="glass"
            style={{ [`--i`]: "0.25s" }}
          >
            Projects
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/skills");
            }}
            className="glass"
            style={{ [`--i`]: "0.5s" }}
          >
            Skills
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="glass"
            style={{ [`--i`]: ".75s" }}
          >
            About
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            className="glass"
            style={{ [`--i`]: "1s" }}
          >
            Contact
          </button>
        </nav>
      </div>
    )
  );
};

export default Nav;
