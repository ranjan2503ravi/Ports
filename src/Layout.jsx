import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="p-4 bg-zinc-900 text-white flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
