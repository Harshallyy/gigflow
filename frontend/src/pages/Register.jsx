import api from "../api/axios";

export default function Register() {
  const register = async () => {
    await api.post("/api/auth/register", {
      name: "Test",
      email: "test@test.com",
      password: "123456",
    });
    alert("Registered");
  };

  return (
    <div className="glass p-6 mb-6">
      <h2 className="font-bold mb-4">Register</h2>
      <button onClick={register} className="glass-btn-outline">
  Register
</button>

    </div>
  );
}
