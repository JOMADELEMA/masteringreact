import React from "react";

import NavBar from "../Components/NavBar";
import PortfolioMenu from "../Components/PortfolioMenu";

const Index = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid bg-secondary rounded mt-5">
        
  <PortfolioMenu />       

      </div>
    </>
  );
};

export default Index;
