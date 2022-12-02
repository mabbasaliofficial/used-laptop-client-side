import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import profile from "../Assets/Profile/Image/profile.png";
import { AuthContext } from "../Contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";

const UserProfile = () => {
  useTitle("Profile");
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
      <div class="w-80">
        <div class="bg-white shadow-xl rounded-lg py-3 border">
          <div class="photo-wrapper p-2">
            {users?.displayImage ? (
              <img
                class="w-32 h-32 rounded-full mx-auto"
                src={users?.img}
                alt={users.displayName}
              />
            ) : (
              <img class="w-32 h-32 rounded-full mx-auto" src={profile} alt={users.displayName} />
            )}
          </div>
          <div class="p-2">
            <h3 class="text-center text-2xl text-gray-900 font-medium leading-8">
              {users.displayName}
            </h3>
            <div class="text-center">
              <p className="text-xs">{users.email}</p>
              <p className="text-sm">{users?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
