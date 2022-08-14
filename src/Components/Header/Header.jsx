import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Nav from "../nav/nav";
const Header = ({ name }) => {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  return (
    <header>
      <div className="menu2" onClick={() => setOpen(true)}></div>
      <p>{name}</p>
      <div onClick={() => navigate("/")} className="home"></div>
      <Nav open={open} setOpen={(e) => setOpen(e)} />
    </header>
  );
};

export default Header;
