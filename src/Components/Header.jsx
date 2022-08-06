import React from "react";
import "./layout.css";
const Header = () => {
  return (
    <>
      <section>
        <div className="info glass">
          <div className="profilePic"></div>
          <h1>"Hello World" My Name Is Shantanu Das</h1>
          <p>Trying To Build Future But Not Just For Me</p>
          <nav>
            <button className="glass">Projects</button>
            <button className="glass">Skills</button>
            <button className="glass">About</button>
            <button className="glass">Contact</button>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
