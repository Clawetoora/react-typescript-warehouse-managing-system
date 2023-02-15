import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Manage products</NavLink>
    </nav>
  );
}
