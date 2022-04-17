import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="container">
            <div class="navbar">
                <div class="logo">
                    <h2>NIX - Photography</h2>
                </div>
                <div class="menu">
                  <Link to={'/'} className="menubar">Home</Link>
                  <Link to={'/packages'} className="menubar">Packages</Link>
                  <Link to={'/about me'} className="menubar">About Me</Link>
                  <Link to={'/login'} className="menubar">Login</Link>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
