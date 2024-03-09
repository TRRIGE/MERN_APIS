import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark mb-5">
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/">
          DataCheck
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                aria-current="page"
                to="/"
              >
                CodeForInterview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/adduser">
                AddUsers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/allusers">
                AllUsers
              </NavLink>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
