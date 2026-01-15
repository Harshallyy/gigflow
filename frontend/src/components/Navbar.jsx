import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="glass p-4 flex justify-between items-center mb-6">
      <h1 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
        GigFlow
      </h1>

      <div className="space-x-3">
        <button
          className="glass-btn-outline"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="glass-btn-outline"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}
