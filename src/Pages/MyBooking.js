import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/buying?email=${user?.email}`;
  const { data: buying = [] } = useQuery({
    queryKey: ["buying", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            { 
            
            buying?.length &&
                buying.map((item, i) => <tr key={item._id}>
                    <th>
                      {i+1}
                    </th>
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
                      <span className="badge badge-ghost badge-sm">{item.condition} Years Used</span>
                    </td>
                    <td>{item.price}TK</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
