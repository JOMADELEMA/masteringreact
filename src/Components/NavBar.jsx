import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (

 
    <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top me-auto">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            JOMADELEMA
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li> */}
              <li class="nav-item">
                <Link to="/shieldui" className="nav-link">
                  Shield UI
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/aboutus" className="nav-link">
                  About Me
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/proyectos" className="nav-link">
                  Proyectos
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contactus" className="nav-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
