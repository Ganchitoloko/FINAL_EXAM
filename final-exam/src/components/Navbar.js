import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#ddd" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/gallery">Gallery</Link>
    </nav>
  );
}

export default Navbar;
