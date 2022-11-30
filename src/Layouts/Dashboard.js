import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isSeller] = useSeller(user.email);
  const [isBuyer] = useBuyer(user.email);
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
            {isBuyer && ( <>
              <li>
                <Link to={`/dashboard/myorders`}>My Booking</Link>
              </li>
              <li>
                <Link to={`/dashboard/mywishlist`}>My Wishlist</Link>
              </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to={`/dashboard/addproducts`}>Add Products</Link>
                </li>
                <li>
                  <Link to={`/dashboard/myproducts`}>My Products</Link>
                </li>
                <li>
                  <Link to={`/dashboard/mybuyers`}>My Buyer</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to={`/dashboard/allusers`}>All Users</Link>
                </li>
                <li>
                  <Link to={`/dashboard/allseller`}>All Seller</Link>
                </li>
                <li>
                  <Link to={`/dashboard/allbuyer`}>All Buyer</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
