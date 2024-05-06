"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Home() {
  // Object to store the user's credentials (email and password)
  const [credentials, setCredentials] = useState({
    numero_control: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", credentials);

    if (res.status === 200) {
      router.push("/dashboard");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="numero_control"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              numero_control: e.target.value,
            })
          }
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default Home;
