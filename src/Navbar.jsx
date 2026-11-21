import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">DEV@Deakin</Link>

      <input
        type="text"
        placeholder="Search..."
        className="search"
      />

      <button className="nav-button">Post</button>

      <Link to="/login" className="login-link">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;