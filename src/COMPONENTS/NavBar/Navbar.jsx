import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import Hollywood from "./Hollywood";
import Bollywood from "./Bollywood";
import Sports from "./Sports";
import Fitness from "./Fitness";
import Technology from "./Technology";
import DataCompo from "../../Store/Store";
import "./Navbar.css";
import DynamicCompo from "./DynamicCompo";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <div className={`navbar ${showMenu ? "active" : ""}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          className="link"
          onClick={() => setShowMenu(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/Hollywood"
          style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          className="link"
          onClick={() => setShowMenu(false)}
        >
          Hollywood
        </NavLink>
        <NavLink
          to="/Bollywood"
          style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          className="link"
          onClick={() => setShowMenu(false)}
        >
          Bollywood
        </NavLink>
        <NavLink
          to="/Sports"
          style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          className="link"
          onClick={() => setShowMenu(false)}
        >
          Sports
        </NavLink>
        <NavLink
          to="/Fitness"
          style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          className="link"
          onClick={() => setShowMenu(false)}
        >
          Fitness
        </NavLink>
        <NavLink
          to="/Technology"
          style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
          className="link"
          onClick={() => setShowMenu(false)}
        >
          Technology
        </NavLink>
      </div>
      <hr />
      <DataCompo>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/Technology" element={<Technology />} />
          {/* Route Structure For Dynamic Route */}
          <Route path="/dynamic/:id" element={<DynamicCompo/>} />
        </Routes>
      </DataCompo>
    </Router>
  );
};

export default Navbar;
