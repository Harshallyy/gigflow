import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

export default function Gigs() {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    api.get("/api/gigs").then((res) => setGigs(res.data));
  }, []);

  return (
    <>
      <div className="glass p-10 max-w-3xl mx-auto mt-16 text-center">
        <h1 className="text-4xl font-bold gradient-text mb-4">
          Hire Creative Talent
        </h1>

        <p className="text-gray-300 mb-8">
          A modern freelance marketplace with secure hiring and real-time workflow.
        </p>

        {gigs.length > 0 && (
          <Link
            to={`/gig/${gigs[0]._id}`}
            className="glass-btn mt-8 inline-block"
          >
            View / Bid
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto mt-12">
        {gigs.map((gig) => (
          <div key={gig._id} className="glass p-6">
            <h3 className="font-bold text-lg">{gig.title}</h3>
            <p className="text-gray-300">₹ {gig.budget}</p>

            <Link
              to={`/gig/${gig._id}`}
              className="mt-3 inline-block text-blue-400"
            >
              View / Bid
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
