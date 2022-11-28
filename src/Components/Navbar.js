import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(console.log);
  };

  const menuItems = (
    <>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/blogs`}>Blogs</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to={`/dashboard`}>Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Sign Out</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={`/login`}>Log In</Link>
          </li>
          <li>
            <Link to={`/signup`}>Sign Up</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to={`/`} className="btn btn-ghost normal-case text-xl">
          Showcase
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label tabIndex={2} htmlFor="dashboard-drawer" className=" navbar-end mr-4 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
