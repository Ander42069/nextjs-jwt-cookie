"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Dashboard() {
  // Object to store the user's information (numero_control and username)
  const [user, setUser] = useState({
    numero_control: "",
  });
  const router = useRouter();

  const getProfile = async () => {
    const profile = await axios.get("/api/profile");
    setUser(profile.data);
  };

  const logout = async () => {
    try {
      const res = await axios.get("/api/auth/logout");
      console.log(res);
    } catch (error) {
      console.error(error.message);
    }
    router.push("/login");
  };
  return (
    <div>
      {JSON.stringify(user)}
      <button onClick={() => getProfile()}>profile</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Dashboard;
