import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <Router>
           <>
    <div className="Footer-parent">
      <div className="Child1">
        <h2>THE SIREN</h2>
      </div>
      <div className="Child2">
        <NavLink to='/Home'><h2>HOME</h2></NavLink>
        <NavLink to='/Hollywood'><h2>HOLLYWOOD</h2></NavLink>
        <NavLink to="/Bollywood"><h2>BOLLYWOOD</h2></NavLink>
      </div>
      <div className="Child3">
        <NavLink to="/Fitness"><h2>FITNESS</h2></NavLink>
        <NavLink to="/Technology"><h2>TECHNOLOGY</h2></NavLink>
        <NavLink to="/Sports"><h2>SPORTS</h2></NavLink>
      </div>
      <div className="Child4">
        <h2><i class="fa-brands fa-instagram"></i></h2>
        <h2><i class="fa-brands fa-stack-overflow"></i></h2>
        <h2><i class="fa-brands fa-github"></i></h2>
      </div>
    </div>

    </>
    </Router>
   
  )
}

export default Footer
