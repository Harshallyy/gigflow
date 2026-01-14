import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Gigs from "./pages/Gigs";
import GigDetail from "./pages/GigDetail";

export default function App() {
  if (window.location.pathname.startsWith("/gig/")) {
    return <GigDetail />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Navbar />
      <Register />
      <Login />
      <Gigs />
    </div>
  );
}
