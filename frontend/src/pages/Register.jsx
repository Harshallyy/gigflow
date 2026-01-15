import { useState } from "react";
import api from "../api/axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await api.post("/api/auth/register", {
        name,
        email,
        password,
      });
      alert("Registered");
    } catch (err) {
      alert("Register failed");
    }
  };

  return (
    <div className="glass p-6 mb-6 max-w-md">
      <h2 className="font-bold mb-4">Register</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full mb-3 p-3 rounded bg-transparent border border-white/20 text-gray-200"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full mb-3 p-3 rounded bg-transparent border border-white/20 text-gray-200"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full mb-4 p-3 rounded bg-transparent border border-white/20 text-gray-200"
      />

      <button onClick={register} className="glass-btn-outline">
        Register
      </button>
    </div>
  );
}
