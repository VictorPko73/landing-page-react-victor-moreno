import React from "react";
import Navbar from "./navbar";
import { navBarData } from "../../data/data";

const NavBarElement = () => (
    <div>
    
    {navBarData.map((navbar, index) => (
      <Navbar
        key={index}
        title={navbar.title}
        element1={navbar.element1}
        element2={navbar.element2}
        element3={navbar.element3}
        element4={navbar.element4}
      />
      
    ))}
  </div>
)

export default NavBarElement;