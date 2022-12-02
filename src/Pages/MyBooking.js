import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";

const MyBooking = () => {
  useTitle("My Booking");
  const { user } = useContext(AuthContext);
  const url = `https://laptop-data.vercel.app/buying?email=${user?.email}`;
  const { data: buying = [] } = useQuery({
    queryKey: ["buying", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3 className="text-3xl font-bold text-center py-5">My Booking</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Products</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {buying?.length &&
              buying.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{item.buyer}</div>
                        <div className="text-xs opacity-100">{item.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.productName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{item.condition}</span>
                  </td>
                  <td>{item.price}TK</td>
                  <td>
                    {item.paid ? (
                      <p>Paid</p>
                    ) : (
                      <Link
                        to={`/dashboard/payment/${item._id}`}
                        className=" tooltip tooltip-secondary text-4xl text-center text-secondary"
                        data-tip="Payment Now..."
                      >
                        <FaMoneyCheckAlt />
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
