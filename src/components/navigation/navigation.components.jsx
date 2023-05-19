import React from "react";
import { NavigationContainer, NavigationItem, NavigationLink } from "./navigation.styles";

const NavigationBar = () => {
  const navLinks = [
    {
      name: "shop",
      url: "/shop",
    },
    {
      name: "cart",
      url: "/cart",
    },
    {
      name: "sign in",
      url: "/signin",
    },
  ];
  return (
    <NavigationContainer>
      {navLinks.map((navLink, index) => (
        <NavigationItem key={index}>
              <NavigationLink to={navLink.url}>{ navLink.name}</NavigationLink>
        </NavigationItem>
      ))}
    </NavigationContainer>
  );
};

export default NavigationBar;
