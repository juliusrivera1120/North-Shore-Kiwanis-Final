import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/">
          <img
            src={logo}
            alt="North Shore Kiwanis logo"
            width="48"
            height="48"
          />
        </Link>
        <h1 className="site-title">North Shore Kiwanis</h1>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/programs">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="#impact" title="Jump to community impact section">
            Our Impact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
