import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="container bg-light rounded mt-5">
        <h2>Index</h2>

        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/aboutus"> About Us </Link>
          </li>
          <li>
            <Link to="/contactus"> Contact Us</Link>
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default Index;
