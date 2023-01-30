import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-20">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Logo
          </Link>
        </div>
        <div className="navbar-end">
          <p className="text-xl font-medium">Paid Total: 0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
