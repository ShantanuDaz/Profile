import React, { useState } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../nav/nav";
const Header = () => {
  let loacation = useLocation();
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  return (
    <header className="header">
      <div className="menu2 icon" onClick={() => setOpen(true)}></div>
      <p>{loacation.pathname.replace("/", "")}</p>
      <div onClick={() => navigate("/")} className="home icon"></div>
      <Nav open={open} setOpen={(e) => setOpen(e)} />
    </header>
  );
};

export default Header;
