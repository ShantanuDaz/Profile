import React, { useState } from "react";
import "./layout.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section>
        <div className="info glass">
          <div className="menu" onClick={() => setOpen(true)}></div>
          <div className="profilePic"></div>
          <h1>"Hello World" My Name Is Shantanu Das</h1>
          <p>Trying To Build Future But Not Just For Me</p>
          <nav>
            <button className="glass" style={{ [`--i`]: "1s" }}>
              Projects
            </button>
            <button className="glass" style={{ [`--i`]: "2s" }}>
              Skills
            </button>
            <button className="glass" style={{ [`--i`]: "3s" }}>
              About
            </button>
            <button className="glass" style={{ [`--i`]: "4s" }}>
              Contact
            </button>
          </nav>
        </div>
        {open && (
          <div className="modal" onClick={() => setOpen(false)}>
            <nav className="showNav">
              <button
                onClick={(e) => e.stopPropagation()}
                className="glass"
                style={{ [`--i`]: "1s" }}
              >
                Projects
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="glass"
                style={{ [`--i`]: "2s" }}
              >
                Skills
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="glass"
                style={{ [`--i`]: "3s" }}
              >
                About
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="glass"
                style={{ [`--i`]: "4s" }}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </section>
    </>
  );
};

export default Header;
