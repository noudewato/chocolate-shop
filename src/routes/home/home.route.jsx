import React from "react";
import Header from "../../components/header/header.component";
import { Outlet } from "react-router-dom";
import { HomeContainer } from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Outlet />
    </HomeContainer>
  );
};

export default Home;
