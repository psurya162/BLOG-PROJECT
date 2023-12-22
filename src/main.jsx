import React from "react";
import ReactDOM from "react-dom/client";


import "./index.css";
import Header from "./COMPONENTS/Header.jsx";
import Navbar from "./COMPONENTS/NavBar/Navbar.jsx";
// import Footer from "./COMPONENTS/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <Header />
    <Navbar />
    
    
    {/* <Footer /> */}
  </React.StrictMode>
);
