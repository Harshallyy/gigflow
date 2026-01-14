import api from "../api/axios";

export default function Login() {
  const login = async () => {
    await api.post("/api/auth/login", {
      email: "test@test.com",
      password: "123456",
    });
    alert("Logged in");
  };

  return (
    <div className="glass p-6 mb-6">
      <h2 className="font-bold mb-4">Login</h2>
<button onClick={login} className="glass-btn-outline">
  Login
</button>

    </div>
  );
}
