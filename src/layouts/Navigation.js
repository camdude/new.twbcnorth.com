import React from "react";

import Logo from "../assets/images/logo-secondary.png";
import NavBar from "../components/NavBar/NavBar";
import NavItem from "../components/NavBar/NavItem";

const navigation = props => {
  return (
    <NavBar home="/" logo={Logo}>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/about">About</NavItem>
      <NavItem link="/register">Register</NavItem>
      <NavItem link="/conferences">Conferences</NavItem>
      <NavItem link="/contact">Contact</NavItem>
    </NavBar>
  );
};

export default navigation;
