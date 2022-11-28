import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] =useAdmin(user.email)
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-300 text-base-content">
            <li>
              <Link to={`/dashboard`}>My Booking</Link>
            </li>
            {
                isAdmin && <>
                <li>
              <Link to={`/dashboard/allusers`}>All Users</Link>
            </li>
                </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;