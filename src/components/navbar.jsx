// imrc -> comando importación react y Component
import React, { Component } from "react";

const NavBar = ({totalCounters}) => {
  return (
    // renombramos class a className
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar {/* espacio de separación */}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;