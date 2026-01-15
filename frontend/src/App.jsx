import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Gigs from "./pages/Gigs";
import GigDetail from "./pages/GigDetail";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Navbar />

      <Routes>
        <Route path="/" element={<Gigs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gig/:id" element={<GigDetail />} />
      </Routes>
    </div>
  );
}
