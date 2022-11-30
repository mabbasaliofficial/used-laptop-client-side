import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import profile from "../Assets/Profile/Image/profile.png";
import { AuthContext } from "../Contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";

const UserProfile = () => {
  useTitle('Profile')
  const { user } = useContext(AuthContext);
  // const [users, setUsers] = useState([])

  const url = `https://laptop-data.vercel.app/user?email=${user?.email}`;
  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div class="flex items-center h-screen w-full justify-center">
      <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            {users?.displayImage ? (
              <img class="w-32 h-32 rounded-full mx-auto" src={users?.img} alt={users.name} />
            ) : (
              <img class="w-32 h-32 rounded-full mx-auto" src={profile} alt={users.name} />
            )}
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{users.name}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>{users?.role}</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                  <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td class="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">{users.email}</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              <a
                class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
