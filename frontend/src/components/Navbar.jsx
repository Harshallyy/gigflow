import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="glass p-4 flex justify-between items-center mb-6">
      <h1 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
        GigFlow
      </h1>

      <div className="space-x-4 text-sm">
        <span
          className="cursor-pointer text-gray-300 hover:text-white"
          onClick={() => navigate("/login")}
        >
          Login
        </span>

        <span
          className="cursor-pointer text-gray-300 hover:text-white"
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </div>
    </div>
  );
}
