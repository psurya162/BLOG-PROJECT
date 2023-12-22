import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "../NavBar/Home";
import Hollywood from "../NavBar/Hollywood";
import Bollywood from "../NavBar/Bollywood";
import Fitness from "../NavBar/Fitness";
import Technology from "../NavBar/Technology";
import Sports from "../NavBar/Sports";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <Router>
        <div className="Parent-Container">
          <div className="child1">
            <div className="one">
              <img
                src="https://img.freepik.com/free-photo/blog-website-development-data-network-concept_53876-125055.jpg?size=626&ext=jpg"
                alt="Blog Image"
              />
            </div>
            <div className="Footer-Header-Blog">
              <h1 className="Rotate-Text">The</h1>
              <h1>Siren</h1>
            </div>
          </div>
          <div className="child2">
            <NavLink
              to="/Home"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
              className="links"
            >
              Home
            </NavLink>
            <NavLink
              to="/Hollywood"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
              className="links"
            >
              Hollywood
            </NavLink>
            <NavLink
              to="/Bollywood"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
              className="links"
            >
              Bollywood
            </NavLink>
          </div>
          <div className="child3">
            <NavLink
              to="/Sports"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
              className="links"
            >
              Sports
            </NavLink>
            <NavLink
              to="/Fitness"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
              className="links"
            >
              Fitness
            </NavLink>
            <NavLink
              to="/Technology"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
              className="links"
            >
              Technology
            </NavLink>
          </div>
          <div className="child4">
            <p className="Icon">
              <i class="fa-brands fa-facebook"></i>
            </p>
            <p className="Icon">
              <i class="fa-brands fa-twitter"></i>
            </p>
            <p className="Icon">
              <i class="fa-brands fa-twitch"></i>
            </p>
          </div>
          <div className="child5">
            <p className="Icon">
              <i class="fa-brands fa-github"></i>
            </p>
            <p className="Icon">
              <i class="fa-brands fa-instagram"></i>
            </p>
            <p className="Icon">
              <i class="fa-brands fa-google"></i>
            </p>
          </div>
        </div>

        {/* <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes> */}
      </Router>
    </>
  );
};

export default Footer;
